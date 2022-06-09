import style from "./index.module.css";
import React from "react";

import testImage from "assets/icons/compass.svg";
const ButtonNavVertical = (props) => {
    const { children, image = testImage, text, onClick=() => {} } = props;

    const handleClick = (e) => {
      onClick(text);
    }
    return (
        <button className={style["button"]} onClick={handleClick}>
            <div
                className={style["icon"]}
                // style={{ backgroundImage: `url(${testImage})` }}
            >
                {/* {image} */}
                <svg
                    width="22"
                    height="24"
                    viewBox="0 0 22 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 2C8.02219 2 6.08879 2.58649 4.4443 3.6853C2.79981 4.78412 1.51809 6.3459 0.761209 8.17317C0.00433284 10.0004 -0.193701 12.0111 0.192152 13.9509C0.578004 15.8907 1.53041 17.6725 2.92894 19.0711C4.32746 20.4696 6.10929 21.422 8.0491 21.8079C9.98891 22.1937 11.9996 21.9957 13.8268 21.2388C15.6541 20.4819 17.2159 19.2002 18.3147 17.5557C19.4135 15.9112 20 13.9778 20 12C20 10.6868 19.7413 9.38642 19.2388 8.17317C18.7363 6.95991 17.9997 5.85752 17.0711 4.92893C16.1425 4.00035 15.0401 3.26375 13.8268 2.7612C12.6136 2.25866 11.3132 2 10 2ZM11 19.93V19C11 18.7348 10.8946 18.4804 10.7071 18.2929C10.5196 18.1054 10.2652 18 10 18C9.73479 18 9.48043 18.1054 9.2929 18.2929C9.10536 18.4804 9 18.7348 9 19V19.93C7.23998 19.7068 5.60408 18.9049 4.34959 17.6504C3.0951 16.3959 2.2932 14.76 2.07 13H3C3.26522 13 3.51957 12.8946 3.70711 12.7071C3.89465 12.5196 4 12.2652 4 12C4 11.7348 3.89465 11.4804 3.70711 11.2929C3.51957 11.1054 3.26522 11 3 11H2.07C2.2932 9.23998 3.0951 7.60408 4.34959 6.34959C5.60408 5.0951 7.23998 4.29319 9 4.07V5C9 5.26522 9.10536 5.51957 9.2929 5.70711C9.48043 5.89464 9.73479 6 10 6C10.2652 6 10.5196 5.89464 10.7071 5.70711C10.8946 5.51957 11 5.26522 11 5V4.07C12.76 4.29319 14.3959 5.0951 15.6504 6.34959C16.9049 7.60408 17.7068 9.23998 17.93 11H17C16.7348 11 16.4804 11.1054 16.2929 11.2929C16.1054 11.4804 16 11.7348 16 12C16 12.2652 16.1054 12.5196 16.2929 12.7071C16.4804 12.8946 16.7348 13 17 13H17.93C17.7068 14.76 16.9049 16.3959 15.6504 17.6504C14.3959 18.9049 12.76 19.7068 11 19.93ZM13.14 7.55L8.14001 9.67C7.90692 9.77099 7.721 9.95691 7.62 10.19L5.5 15.19C5.42125 15.3734 5.39916 15.5761 5.43658 15.7722C5.47401 15.9682 5.56923 16.1485 5.71 16.29C5.89463 16.4784 6.14623 16.5862 6.41 16.59C6.54837 16.5901 6.68503 16.5594 6.81 16.5L11.81 14.38C12.0431 14.279 12.229 14.0931 12.33 13.86L14.45 8.86C14.5273 8.67676 14.5482 8.47463 14.51 8.27946C14.4718 8.08429 14.3763 7.90493 14.2357 7.7643C14.0951 7.62368 13.9157 7.52818 13.7205 7.49001C13.5254 7.45183 13.3232 7.47272 13.14 7.55ZM10.65 12.65L8.37 13.65L9.37 11.37L11.65 10.37L10.65 12.65Z"
                       
                    />
                </svg>
            </div>
            <div className={style["text"]}>{text}</div>
        </button>
    );
};

export default ButtonNavVertical;
