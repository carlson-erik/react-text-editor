import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import replace from "@rollup/plugin-replace";

const packageJson = require("./package.json");

/**
 * Return a Rollup configuration for a `pkg` with `env` and `target`.
 */

function configure(pkg, env, target) {
  const isProd = env === "production";
  const isUmd = target === "umd";
  const isModule = target === "module";
  const isCommonJs = target === "cjs";
  const input = `src/index.ts`;
  const deps = []
    .concat(pkg.dependencies ? Object.keys(pkg.dependencies) : [])
    .concat(pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : []);

  // Stop Rollup from warning about circular dependencies.
  const onwarn = (warning) => {
    if (warning.code !== "CIRCULAR_DEPENDENCY") {
      console.warn(`(!) ${warning.message}`); // eslint-disable-line no-console
    }
  };

  const plugins = [
    typescript({ tsconfig: "./tsconfig.json" }),

    // Allow Rollup to resolve modules from `node_modules`, since it only
    // resolves local modules by default.
    resolve(),

    // Allow Rollup to resolve CommonJS modules, since it only resolves ES2015
    // modules by default.
    commonjs({ exclude: [`src/**`] }),

    // Replace `process.env.NODE_ENV` with its value, which enables some modules
    // like React to use their production variant.
    replace({
      "process.env.NODE_ENV": JSON.stringify(env),
      preventAssignment: true,
    }),

    // Use Babel to transpile the result, limiting it to the source code.
    babel({
      babelHelpers: "runtime",
      include: [`src/**`],
      extensions: [".js", ".ts", ".tsx"],
      presets: [
        "@babel/preset-typescript",
        [
          "@babel/preset-env",
          isUmd
            ? { modules: false }
            : {
                exclude: [
                  "@babel/plugin-transform-regenerator",
                  "@babel/transform-async-to-generator",
                ],
                modules: false,
                targets: {
                  esmodules: isModule,
                },
              },
        ],
        "@babel/preset-react",
      ],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          isUmd
            ? {}
            : {
                regenerator: false,
                useESModules: isModule,
              },
        ],
        "@babel/plugin-transform-class-properties",
      ],
    }),

    // Only minify the output in production, since it is very slow. And only
    // for UMD builds, since modules will be bundled by the consumer.
    isUmd && isProd && terser(),
  ].filter(Boolean);

  if (isUmd) {
    return {
      plugins,
      input,
      onwarn,
      output: {
        format: "umd",
        file: `./${isProd ? pkg.umdMin : pkg.umd}`,
        exports: "named",
        name: pkg.name,
        globals: pkg.umdGlobals,
      },
      external: Object.keys(pkg.umdGlobals || {}),
    };
  }

  if (isCommonJs) {
    return {
      plugins,
      input,
      onwarn,
      output: [
        {
          file: `./${pkg.main}`,
          format: "cjs",
          exports: "named",
          sourcemap: true,
        },
      ],
      // We need to explicitly state which modules are external, meaning that
      // they are present at runtime. In the case of non-UMD configs, this means
      // all non-ReactTextEditor packages.
      external: (id) => {
        return !!deps.find((dep) => dep === id || id.startsWith(`${dep}/`));
      },
    };
  }

  if (isModule) {
    return {
      plugins,
      input,
      onwarn,
      output: [
        {
          file: `./${pkg.module}`,
          format: "es",
          sourcemap: true,
        },
      ],
      // We need to explicitly state which modules are external, meaning that
      // they are present at runtime. In the case of non-UMD configs, this means
      // all non-ReactTextEditor packages.
      external: (id) => {
        return !!deps.find((dep) => dep === id || id.startsWith(`${dep}/`));
      },
    };
  }
}

export default [
  configure(packageJson, "development", "cjs", {}),
  configure(packageJson, "development", "module", {}),
  configure(packageJson, "development", "umd", {}),
  configure(packageJson, "production", "umd", {}),
];
