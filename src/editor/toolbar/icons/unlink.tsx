import { ToolbarIcon } from "../styled";
import { IconProps } from "../types";

export default function Link(props: IconProps) {
  const { color, size = "large" } = props;
  return (
    <ToolbarIcon
      data-testid={props["data-testid"]}
      size={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-3 -3 24 24"
      fill={color}
    >
      <path d="M6.45647269,10.218434 C5.802373,10.0310138 5.06886939,10.1949142 4.5536484,10.7101352 L2.50148612,12.7622975 C1.74590083,13.5178828 1.74590083,14.7429286 2.50148612,15.4985139 C3.2570714,16.2540992 4.4821172,16.2540992 5.23770249,15.4985139 L7.28986477,13.4463516 C7.80508576,12.9311306 7.96898616,12.197627 7.78156597,11.5435273 C7.41056466,11.7627709 6.92461295,11.7129916 6.60581067,11.3941893 C6.2870084,11.0753871 6.23722907,10.5894353 6.45647269,10.218434 L6.45647269,10.218434 Z M10.9024881,5.7724186 C11.2734894,5.55317498 11.7594411,5.60295431 12.0782434,5.92175658 C12.3970457,6.24055886 12.446825,6.72651056 12.2275814,7.09751188 C12.8816811,7.28493206 13.6151847,7.12103166 14.1304057,6.60581067 L15.4985139,5.23770249 C16.2540992,4.4821172 16.2540992,3.2570714 15.4985139,2.50148612 C14.7429286,1.74590083 13.5178828,1.74590083 12.7622975,2.50148612 L11.3941893,3.8695943 C10.8789683,4.38481529 10.7150679,5.11831891 10.9024881,5.7724186 L10.9024881,5.7724186 Z M16.8666221,1.13337793 C18.3777926,2.64454851 18.3777926,5.0946401 16.8666221,6.60581067 L15.4985139,7.97391886 C13.9873433,9.48508943 11.5372517,9.48508943 10.0260811,7.97391886 C8.51491057,6.46274829 8.51491057,4.01265669 10.0260811,2.50148612 L11.3941893,1.13337793 C12.9053599,-0.377792644 15.3554515,-0.377792644 16.8666221,1.13337793 Z M8.65797295,9.34202705 C10.1691435,10.8531976 10.1691435,13.3032892 8.65797295,14.8144598 L6.60581067,16.8666221 C5.0946401,18.3777926 2.64454851,18.3777926 1.13337793,16.8666221 C-0.377792644,15.3554515 -0.377792644,12.9053599 1.13337793,11.3941893 L3.18554021,9.34202705 C4.69671078,7.83085647 7.14680238,7.83085647 8.65797295,9.34202705 Z" />
    </ToolbarIcon>
  );
}
