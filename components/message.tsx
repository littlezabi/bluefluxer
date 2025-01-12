import { FaCheck } from "react-icons/fa";
import { useEffect } from "react";
const Message = ({
  message = "",
  handleClose = () => {},
  variant = "success",
  style = {},
  closeAfter = 10,
}) => {
  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, closeAfter * 1000);
  }, [handleClose, closeAfter]);
  return (
    <div
      className={`message-box ${variant || "success"}`}
      style={style ? style : {}}
    >
      <div
        className='filler'
        style={{
          animationDuration: `${closeAfter}s`,
        }}
      ></div>
      <svg
        data-v-347a4ac8=''
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 536 536'
        width='12px'
        height='18px'
      >
        <path
          fill='currentColor'
          d='M440 67c0 9-2 17-5 25-4 8-9 15-14 21a61 61 0 0 1-46 20 63 63 0 0 1-46-20c-6-6-11-13-14-21s-6-16-6-25 2-18 6-26 8-15 14-21 12-11 20-15a63 63 0 0 1 51 0c8 4 15 8 21 15s10 13 14 21c3 8 5 17 5 26zm0 201c0 9-2 18-5 26-4 8-9 15-14 21s-13 10-21 14a63 63 0 0 1-51 0 67 67 0 0 1-34-35c-4-8-6-17-6-26a65 65 0 0 1 20-47 67 67 0 0 1 46-19 63 63 0 0 1 46 19 69 69 0 0 1 19 47zm-2 201a64 64 0 0 1-18 46 63 63 0 0 1-45 18 62 62 0 0 1-58-39 64 64 0 0 1 0-49c3-8 7-15 13-21a62 62 0 0 1 45-18 62 62 0 0 1 58 39c3 8 5 16 5 24zM226 67c0 9-2 17-5 25a65 65 0 0 1-85 36 71 71 0 0 1-35-35c-3-9-5-17-5-26s2-18 5-26 8-15 14-21 13-11 21-15 16-5 25-5 18 2 26 5 14 8 20 15 10 13 14 21c3 8 5 17 5 26zm0 201c0 9-2 18-5 26a65 65 0 0 1-60 40c-9 0-17-2-25-5a67 67 0 0 1-35-35c-3-8-5-17-5-26a65 65 0 0 1 19-47 67 67 0 0 1 46-19 63 63 0 0 1 46 19 69 69 0 0 1 19 47zm0 201c0 10-2 18-5 26a65 65 0 0 1-60 40c-9 1-17-1-25-5a67 67 0 0 1-35-35c-3-8-5-16-5-26a65 65 0 0 1 19-46 67 67 0 0 1 46-20 63 63 0 0 1 46 20 69 69 0 0 1 19 46z'
        ></path>
      </svg>
      <span className='a938237502'>
        {variant == "error" || variant == "alert" || variant == "danger" ? (
          <picture>
            <img
              className='alert-392'
              src='/media/assets/alert-icon.svg'
              alt='alert'
            />
          </picture>
        ) : (
          <FaCheck className='check-29838' />
        )}
        {message}
      </span>
      <span className='close' onClick={() => handleClose()}>
        &times;
      </span>
    </div>
  );
};

export default Message;
