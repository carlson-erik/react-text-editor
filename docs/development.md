## Available Commands

In the project directory, you can run:

### `npm start`

Runs the Storybook development environment.
Open [http://localhost:4334](http://localhost:4334) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console/peview.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the component for production to the `dist` folder.

### `npm run build-storybook`

Makes a static build of the storybook development environment to the `storybook-static` folder.

## Publishing a new version to NPM

1. Create a new branch off of `main`.
2. Update `package.json` and `package-lock.json` to reflect the new version
3. `npm run test` - Confirm the component is functioning correctly
4. Publish version changes to `main`:
   - Create & push a version commit in your branch: `git commit -m "Version: X.Y.Z"`
   - Create a [Pull Request](https://github.com/carlson-erik/gneiss-editor/pulls) in the repository.
   - Have a contributer approve your PR
   - Merge your PR into `main`
5. Checkout & pull latest `main`
6. `npm run build:rollup` - Build the component
7. `git tag X.Y.Z` - Create the git tag for the new release
8. `npm publish` - Publish the new release to npm
9. `git push --tags` - Push new tag to repository

Note: X.Y.Z version needs to follow [Semantic Versioning](https://semver.org/).
