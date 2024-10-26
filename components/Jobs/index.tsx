import { motion } from 'framer-motion'
import TextField from '@mui/joy/TextField'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import FormHelperText from '@mui/joy/FormHelperText'
import Input from '@mui/joy/Input'
import EmailIcon from '@mui/icons-material/Email'

export default function Jobs() {
  return (
    <div className="container min-w-[100%] px-4">
      <div className="flex text-center text-6xl mb-7 w-[100%] items-center justify-center">
        <FormControl required size="md" color="primary">
          <Input
            placeholder="Search Category"
            startDecorator={<EmailIcon />}
            className="mt-7 bg-white w-[40%]"
            name="Name"
            type="tel"
            autoComplete="on"
            autoFocus
          />
        </FormControl>
        {/* <TextField
          className="mt-7 bg-white w-[40%]"
          placeholder="Search Category"
        /> */}
      </div>

      <div className="grid justify-items-center">
        <div className="inline-grid grid-cols-3 gap-4 ">
          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border h-32 w-auto p-2 border-4 rounded-lg bg-gray-100 shadow-sm">
              <div className="mx-auto flex items-center mt-[4%]">
                <div className="flex box-border w-20 h-20 bg-gray-200 rounded-full items-center justify-center mx-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.3957 10.4375L30.3123 6.35416C27.3957 3.4375 22.604 3.4375 19.6873 6.35416L15.604 10.4375C14.7915 11.25 14.7915 12.5833 15.604 13.3958L23.5415 21.3333C24.354 22.1458 25.6665 22.1458 26.479 21.3333L34.4165 13.3958C35.2082 12.5833 35.2082 11.25 34.3957 10.4375Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M10.4373 15.6042L6.354 19.6875C3.43734 22.6042 3.43734 27.3958 6.354 30.3125L10.4373 34.3958C11.2498 35.2083 12.5623 35.2083 13.3748 34.3958L21.3123 26.4583C22.1248 25.6458 22.1248 24.3333 21.3123 23.5208L13.3957 15.6042C12.5832 14.7917 11.2498 14.7917 10.4373 15.6042Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M43.6458 19.6875L39.5625 15.6042C38.75 14.7917 37.4375 14.7917 36.625 15.6042L28.6875 23.5417C27.875 24.3542 27.875 25.6667 28.6875 26.4792L36.625 34.4167C37.4375 35.2292 38.75 35.2292 39.5625 34.4167L43.6458 30.3333C46.5625 27.3958 46.5625 22.6042 43.6458 19.6875Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M15.6042 39.5625L19.6875 43.6458C22.6042 46.5625 27.3959 46.5625 30.3125 43.6458L34.3959 39.5625C35.2084 38.75 35.2084 37.4375 34.3959 36.625L26.4584 28.6875C25.6459 27.875 24.3334 27.875 23.5209 28.6875L15.5834 36.625C14.7917 37.4167 14.7917 38.75 15.6042 39.5625Z"
                      fill="#6A6BFF"
                    />
                  </svg>
                </div>
                <p className=" text-center font-bold text-2xl">UX/UI design</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: -50 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border h-32 w-auto p-2 border-4 rounded-lg bg-gray-100 shadow-sm">
              <div className="mx-auto flex items-center mt-[4%]">
                <div className="flex box-border w-20 h-20 bg-gray-200 rounded-full items-center justify-center mx-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.9998 4.16666C13.4998 4.16666 4.1665 13.5 4.1665 25C4.1665 36.5 13.4998 45.8333 24.9998 45.8333C36.4998 45.8333 45.8332 36.5 45.8332 25C45.8332 13.5 36.4998 4.16666 24.9998 4.16666ZM17.7707 28.0625C18.3748 28.6667 18.3748 29.6667 17.7707 30.2708C17.4582 30.5833 17.0623 30.7292 16.6665 30.7292C16.2707 30.7292 15.8748 30.5833 15.5623 30.2708L11.3957 26.1042C10.7915 25.5 10.7915 24.5 11.3957 23.8958L15.5623 19.7292C16.1665 19.125 17.1665 19.125 17.7707 19.7292C18.3748 20.3333 18.3748 21.3333 17.7707 21.9375L14.7082 25L17.7707 28.0625ZM28.5207 20.75L24.354 30.4792C24.104 31.0625 23.5207 31.4167 22.9165 31.4167C22.7082 31.4167 22.4998 31.375 22.3123 31.2917C21.5207 30.9583 21.1457 30.0417 21.4998 29.2292L25.6665 19.5C25.9998 18.7083 26.9165 18.3333 27.7082 18.6875C28.4998 19.0417 28.854 19.9583 28.5207 20.75ZM38.604 26.1042L34.4373 30.2708C34.1248 30.5833 33.729 30.7292 33.3332 30.7292C32.9373 30.7292 32.5415 30.5833 32.229 30.2708C31.6248 29.6667 31.6248 28.6667 32.229 28.0625L35.2915 25L32.229 21.9375C31.6248 21.3333 31.6248 20.3333 32.229 19.7292C32.8332 19.125 33.8332 19.125 34.4373 19.7292L38.604 23.8958C39.2082 24.5 39.2082 25.5 38.604 26.1042Z"
                      fill="#6A6BFF"
                    />
                  </svg>
                </div>
                <p className="text-center font-bold text-2xl">Development</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border h-32 w-auto p-2 border-4 rounded-lg bg-gray-100 shadow-sm">
              <div className="mx-auto flex items-center mt-[4%]">
                <div className="flex box-border w-20 h-20 bg-gray-200 rounded-full items-center justify-center mx-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.8335 27.6667L41.9168 25.7917L25.771 41.9167L27.7085 43.8542C29.3335 45.4792 31.021 46.2917 32.6877 46.2917C34.3543 46.2917 36.0418 45.4792 37.6668 43.8542L43.8335 37.6875C47.146 34.3542 47.146 31 43.8335 27.6667Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M22.2707 6.10416C18.9998 2.83333 15.5623 2.83333 12.2915 6.10416L6.104 12.2708C2.854 15.5417 2.854 18.9792 6.104 22.25L8.02067 24.1667L24.1665 8.02083L22.2707 6.10416Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M45.4373 8.20833C42.7082 15.0208 36.479 23.9167 30.5415 29.7292C29.6873 24.3542 25.3957 20.1458 19.979 19.3958C25.8123 13.4375 34.7707 7.125 41.604 4.375C42.8123 3.91666 44.0207 4.27083 44.7707 5.02083C45.5623 5.8125 45.9373 7 45.4373 8.20833Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M28.7083 31.4375C28.2917 31.7917 27.875 32.1458 27.4583 32.4792L23.7292 35.4583C23.7292 35.3958 23.7083 35.3125 23.7083 35.2292C23.4167 33 22.375 30.9375 20.6875 29.25C18.9792 27.5417 16.8542 26.5 14.5208 26.2083C14.4583 26.2083 14.375 26.1875 14.3125 26.1875L17.3333 22.375C17.625 22 17.9375 21.6458 18.2708 21.2708L19.6875 21.4583C24.1667 22.0833 27.7708 25.6042 28.4792 30.0625L28.7083 31.4375Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M21.729 36.7083C21.729 39 20.854 41.1875 19.1873 42.8333C17.9165 44.125 16.2082 45 14.1248 45.25L9.02067 45.8125C6.229 46.125 3.83317 43.7292 4.14567 40.9167L4.70817 35.7917C5.20817 31.2292 9.02067 28.3125 13.0623 28.2292C13.4582 28.2083 13.8957 28.2292 14.3123 28.2708C16.0832 28.5 17.7915 29.3125 19.229 30.7292C20.6248 32.125 21.4165 33.7708 21.6457 35.5C21.6873 35.9167 21.729 36.3125 21.729 36.7083Z"
                      fill="#6A6BFF"
                    />
                  </svg>
                </div>
                <p className="text-center font-bold text-2xl">Graphic design</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border h-32 w-auto p-2 border-4 rounded-lg bg-gray-100 shadow-sm">
              <div className="mx-auto flex items-center mt-[4%]">
                <div className="flex box-border w-20 h-20 bg-gray-200 rounded-full items-center justify-center mx-8">
                  <svg
                    width="50"
                    height="54"
                    viewBox="0 0 50 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_44_112)">
                      <path
                        d="M43.75 45.8333H6.25C5.39583 45.8333 4.6875 45.125 4.6875 44.2708C4.6875 43.4167 5.39583 42.7083 6.25 42.7083H43.75C44.6042 42.7083 45.3125 43.4167 45.3125 44.2708C45.3125 45.125 44.6042 45.8333 43.75 45.8333Z"
                        fill="#6A6BFF"
                      />
                      <path
                        d="M39.6252 7.25C35.5835 3.20834 31.6252 3.10417 27.4794 7.25L24.9585 9.77084C24.7502 9.97917 24.6669 10.3125 24.7502 10.6042C26.3335 16.125 30.7502 20.5417 36.271 22.125C36.3544 22.1458 36.4377 22.1667 36.521 22.1667C36.7502 22.1667 36.9585 22.0833 37.1252 21.9167L39.6252 19.3958C41.6877 17.3542 42.6877 15.375 42.6877 13.375C42.7085 11.3125 41.7085 9.3125 39.6252 7.25Z"
                        fill="#6A6BFF"
                      />
                      <path
                        d="M32.5208 24.0208C31.9167 23.7292 31.3333 23.4375 30.7708 23.1042C30.3125 22.8333 29.875 22.5417 29.4375 22.2292C29.0833 22 28.6667 21.6667 28.2708 21.3333C28.2292 21.3125 28.0833 21.1875 27.9167 21.0208C27.2292 20.4375 26.4583 19.6875 25.7708 18.8542C25.7083 18.8125 25.6042 18.6667 25.4583 18.4792C25.25 18.2292 24.8958 17.8125 24.5833 17.3333C24.3333 17.0208 24.0417 16.5625 23.7708 16.1042C23.4375 15.5417 23.1458 14.9792 22.8542 14.3958C22.685 14.0333 22.5369 13.6778 22.4016 13.3334C22.2684 12.9941 21.8312 12.8979 21.5735 13.1557L9.04168 25.6875C8.77085 25.9583 8.52085 26.4792 8.45835 26.8333L7.33335 34.8125C7.12501 36.2292 7.52085 37.5625 8.39585 38.4583C9.14585 39.1875 10.1875 39.5833 11.3125 39.5833C11.5625 39.5833 11.8125 39.5625 12.0625 39.5208L20.0625 38.3958C20.4375 38.3333 20.9583 38.0833 21.2083 37.8125L33.733 25.2878C33.9925 25.0283 33.8937 24.5856 33.5524 24.4505C33.2187 24.3184 32.8801 24.1765 32.5208 24.0208Z"
                        fill="#6A6BFF"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_44_112"
                        x="-4"
                        y="0"
                        width="58"
                        height="58"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_44_112"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_44_112"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p className="text-center font-bold text-2xl">Content Writer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border h-32 w-auto p-2 border-4 rounded-lg bg-gray-100 shadow-sm">
              <div className="mx-auto flex items-center mt-[4%]">
                <div className="flex box-border w-20 h-20 bg-gray-200 rounded-full items-center justify-center mx-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.9377 8.22917V16.1458H27.8127V8.22917C27.8127 7.66667 27.3127 7.39584 26.9793 7.39584C26.8752 7.39584 26.771 7.41667 26.6668 7.45834L10.146 13.6875C9.04183 14.1042 8.3335 15.1458 8.3335 16.3333V17.7292C6.43766 19.1458 5.2085 21.4167 5.2085 23.9792V16.3333C5.2085 13.8542 6.72933 11.6458 9.04183 10.7708L25.5835 4.52084C26.0418 4.35417 26.521 4.27084 26.9793 4.27084C29.0627 4.27084 30.9377 5.95834 30.9377 8.22917Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M44.7918 30.2083V32.2917C44.7918 32.8542 44.3543 33.3125 43.7709 33.3333H40.7293C39.6251 33.3333 38.6251 32.5208 38.5418 31.4375C38.4793 30.7917 38.7293 30.1875 39.1459 29.7708C39.5209 29.375 40.0418 29.1667 40.6043 29.1667H43.7501C44.3543 29.1875 44.7918 29.6458 44.7918 30.2083Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M40.5835 26.9792H42.7085C43.8543 26.9792 44.7918 26.0417 44.7918 24.8958V23.9792C44.7918 19.6667 41.271 16.1458 36.9585 16.1458H13.0418C11.271 16.1458 9.646 16.7292 8.3335 17.7292C6.43766 19.1458 5.2085 21.4167 5.2085 23.9792V38C5.2085 42.3125 8.72933 45.8333 13.0418 45.8333H36.9585C41.271 45.8333 44.7918 42.3125 44.7918 38V37.6042C44.7918 36.4583 43.8543 35.5208 42.7085 35.5208H40.896C38.896 35.5208 36.9793 34.2917 36.4585 32.3542C36.021 30.7708 36.5418 29.25 37.5835 28.2292C38.3543 27.4375 39.4168 26.9792 40.5835 26.9792ZM29.1668 26.5625H14.5835C13.7293 26.5625 13.021 25.8542 13.021 25C13.021 24.1458 13.7293 23.4375 14.5835 23.4375H29.1668C30.021 23.4375 30.7293 24.1458 30.7293 25C30.7293 25.8542 30.021 26.5625 29.1668 26.5625Z"
                      fill="#6A6BFF"
                    />
                  </svg>
                </div>
                <p className="text-center font-bold text-2xl">
                  Finance Manager
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border h-32 w-auto p-2 border-4 rounded-lg bg-gray-100 shadow-sm">
              <div className="mx-auto flex items-center mt-[4%]">
                <div className="flex box-border w-20 h-20 bg-gray-200 rounded-full items-center justify-center mx-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.3957 10.4375L30.3123 6.35416C27.3957 3.4375 22.604 3.4375 19.6873 6.35416L15.604 10.4375C14.7915 11.25 14.7915 12.5833 15.604 13.3958L23.5415 21.3333C24.354 22.1458 25.6665 22.1458 26.479 21.3333L34.4165 13.3958C35.2082 12.5833 35.2082 11.25 34.3957 10.4375Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M10.4373 15.6042L6.354 19.6875C3.43734 22.6042 3.43734 27.3958 6.354 30.3125L10.4373 34.3958C11.2498 35.2083 12.5623 35.2083 13.3748 34.3958L21.3123 26.4583C22.1248 25.6458 22.1248 24.3333 21.3123 23.5208L13.3957 15.6042C12.5832 14.7917 11.2498 14.7917 10.4373 15.6042Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M43.6458 19.6875L39.5625 15.6042C38.75 14.7917 37.4375 14.7917 36.625 15.6042L28.6875 23.5417C27.875 24.3542 27.875 25.6667 28.6875 26.4792L36.625 34.4167C37.4375 35.2292 38.75 35.2292 39.5625 34.4167L43.6458 30.3333C46.5625 27.3958 46.5625 22.6042 43.6458 19.6875Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M15.6042 39.5625L19.6875 43.6458C22.6042 46.5625 27.3959 46.5625 30.3125 43.6458L34.3959 39.5625C35.2084 38.75 35.2084 37.4375 34.3959 36.625L26.4584 28.6875C25.6459 27.875 24.3334 27.875 23.5209 28.6875L15.5834 36.625C14.7917 37.4167 14.7917 38.75 15.6042 39.5625Z"
                      fill="#6A6BFF"
                    />
                  </svg>
                </div>
                <p className="text-center font-bold text-2xl">UX/UI designs</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border h-32 w-auto p-2 border-4 rounded-lg bg-gray-100 shadow-sm">
              <div className="mx-auto flex items-center mt-[4%]">
                <div className="flex box-border w-20 h-20 bg-gray-200 rounded-full items-center justify-center mx-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.3957 10.4375L30.3123 6.35416C27.3957 3.4375 22.604 3.4375 19.6873 6.35416L15.604 10.4375C14.7915 11.25 14.7915 12.5833 15.604 13.3958L23.5415 21.3333C24.354 22.1458 25.6665 22.1458 26.479 21.3333L34.4165 13.3958C35.2082 12.5833 35.2082 11.25 34.3957 10.4375Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M10.4373 15.6042L6.354 19.6875C3.43734 22.6042 3.43734 27.3958 6.354 30.3125L10.4373 34.3958C11.2498 35.2083 12.5623 35.2083 13.3748 34.3958L21.3123 26.4583C22.1248 25.6458 22.1248 24.3333 21.3123 23.5208L13.3957 15.6042C12.5832 14.7917 11.2498 14.7917 10.4373 15.6042Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M43.6458 19.6875L39.5625 15.6042C38.75 14.7917 37.4375 14.7917 36.625 15.6042L28.6875 23.5417C27.875 24.3542 27.875 25.6667 28.6875 26.4792L36.625 34.4167C37.4375 35.2292 38.75 35.2292 39.5625 34.4167L43.6458 30.3333C46.5625 27.3958 46.5625 22.6042 43.6458 19.6875Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M15.6042 39.5625L19.6875 43.6458C22.6042 46.5625 27.3959 46.5625 30.3125 43.6458L34.3959 39.5625C35.2084 38.75 35.2084 37.4375 34.3959 36.625L26.4584 28.6875C25.6459 27.875 24.3334 27.875 23.5209 28.6875L15.5834 36.625C14.7917 37.4167 14.7917 38.75 15.6042 39.5625Z"
                      fill="#6A6BFF"
                    />
                  </svg>
                </div>
                <p className=" text-center font-bold text-2xl">UX/UI design</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: -50 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border h-32 w-auto p-2 border-4 rounded-lg bg-gray-100 shadow-sm">
              <div className="mx-auto flex items-center mt-[4%]">
                <div className="flex box-border w-20 h-20 bg-gray-200 rounded-full items-center justify-center mx-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.9998 4.16666C13.4998 4.16666 4.1665 13.5 4.1665 25C4.1665 36.5 13.4998 45.8333 24.9998 45.8333C36.4998 45.8333 45.8332 36.5 45.8332 25C45.8332 13.5 36.4998 4.16666 24.9998 4.16666ZM17.7707 28.0625C18.3748 28.6667 18.3748 29.6667 17.7707 30.2708C17.4582 30.5833 17.0623 30.7292 16.6665 30.7292C16.2707 30.7292 15.8748 30.5833 15.5623 30.2708L11.3957 26.1042C10.7915 25.5 10.7915 24.5 11.3957 23.8958L15.5623 19.7292C16.1665 19.125 17.1665 19.125 17.7707 19.7292C18.3748 20.3333 18.3748 21.3333 17.7707 21.9375L14.7082 25L17.7707 28.0625ZM28.5207 20.75L24.354 30.4792C24.104 31.0625 23.5207 31.4167 22.9165 31.4167C22.7082 31.4167 22.4998 31.375 22.3123 31.2917C21.5207 30.9583 21.1457 30.0417 21.4998 29.2292L25.6665 19.5C25.9998 18.7083 26.9165 18.3333 27.7082 18.6875C28.4998 19.0417 28.854 19.9583 28.5207 20.75ZM38.604 26.1042L34.4373 30.2708C34.1248 30.5833 33.729 30.7292 33.3332 30.7292C32.9373 30.7292 32.5415 30.5833 32.229 30.2708C31.6248 29.6667 31.6248 28.6667 32.229 28.0625L35.2915 25L32.229 21.9375C31.6248 21.3333 31.6248 20.3333 32.229 19.7292C32.8332 19.125 33.8332 19.125 34.4373 19.7292L38.604 23.8958C39.2082 24.5 39.2082 25.5 38.604 26.1042Z"
                      fill="#6A6BFF"
                    />
                  </svg>
                </div>
                <p className="text-center font-bold text-2xl">Development</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border h-32 w-auto p-2 border-4 rounded-lg bg-gray-100 shadow-sm">
              <div className="mx-auto flex items-center mt-[4%]">
                <div className="flex box-border w-20 h-20 bg-gray-200 rounded-full items-center justify-center mx-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.8335 27.6667L41.9168 25.7917L25.771 41.9167L27.7085 43.8542C29.3335 45.4792 31.021 46.2917 32.6877 46.2917C34.3543 46.2917 36.0418 45.4792 37.6668 43.8542L43.8335 37.6875C47.146 34.3542 47.146 31 43.8335 27.6667Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M22.2707 6.10416C18.9998 2.83333 15.5623 2.83333 12.2915 6.10416L6.104 12.2708C2.854 15.5417 2.854 18.9792 6.104 22.25L8.02067 24.1667L24.1665 8.02083L22.2707 6.10416Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M45.4373 8.20833C42.7082 15.0208 36.479 23.9167 30.5415 29.7292C29.6873 24.3542 25.3957 20.1458 19.979 19.3958C25.8123 13.4375 34.7707 7.125 41.604 4.375C42.8123 3.91666 44.0207 4.27083 44.7707 5.02083C45.5623 5.8125 45.9373 7 45.4373 8.20833Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M28.7083 31.4375C28.2917 31.7917 27.875 32.1458 27.4583 32.4792L23.7292 35.4583C23.7292 35.3958 23.7083 35.3125 23.7083 35.2292C23.4167 33 22.375 30.9375 20.6875 29.25C18.9792 27.5417 16.8542 26.5 14.5208 26.2083C14.4583 26.2083 14.375 26.1875 14.3125 26.1875L17.3333 22.375C17.625 22 17.9375 21.6458 18.2708 21.2708L19.6875 21.4583C24.1667 22.0833 27.7708 25.6042 28.4792 30.0625L28.7083 31.4375Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M21.729 36.7083C21.729 39 20.854 41.1875 19.1873 42.8333C17.9165 44.125 16.2082 45 14.1248 45.25L9.02067 45.8125C6.229 46.125 3.83317 43.7292 4.14567 40.9167L4.70817 35.7917C5.20817 31.2292 9.02067 28.3125 13.0623 28.2292C13.4582 28.2083 13.8957 28.2292 14.3123 28.2708C16.0832 28.5 17.7915 29.3125 19.229 30.7292C20.6248 32.125 21.4165 33.7708 21.6457 35.5C21.6873 35.9167 21.729 36.3125 21.729 36.7083Z"
                      fill="#6A6BFF"
                    />
                  </svg>
                </div>
                <p className="text-center font-bold text-2xl">Graphic design</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border h-32 w-auto p-2 border-4 rounded-lg bg-gray-100 shadow-sm">
              <div className="mx-auto flex items-center mt-[4%]">
                <div className="flex box-border w-20 h-20 bg-gray-200 rounded-full items-center justify-center mx-8">
                  <svg
                    width="50"
                    height="54"
                    viewBox="0 0 50 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_44_112)">
                      <path
                        d="M43.75 45.8333H6.25C5.39583 45.8333 4.6875 45.125 4.6875 44.2708C4.6875 43.4167 5.39583 42.7083 6.25 42.7083H43.75C44.6042 42.7083 45.3125 43.4167 45.3125 44.2708C45.3125 45.125 44.6042 45.8333 43.75 45.8333Z"
                        fill="#6A6BFF"
                      />
                      <path
                        d="M39.6252 7.25C35.5835 3.20834 31.6252 3.10417 27.4794 7.25L24.9585 9.77084C24.7502 9.97917 24.6669 10.3125 24.7502 10.6042C26.3335 16.125 30.7502 20.5417 36.271 22.125C36.3544 22.1458 36.4377 22.1667 36.521 22.1667C36.7502 22.1667 36.9585 22.0833 37.1252 21.9167L39.6252 19.3958C41.6877 17.3542 42.6877 15.375 42.6877 13.375C42.7085 11.3125 41.7085 9.3125 39.6252 7.25Z"
                        fill="#6A6BFF"
                      />
                      <path
                        d="M32.5208 24.0208C31.9167 23.7292 31.3333 23.4375 30.7708 23.1042C30.3125 22.8333 29.875 22.5417 29.4375 22.2292C29.0833 22 28.6667 21.6667 28.2708 21.3333C28.2292 21.3125 28.0833 21.1875 27.9167 21.0208C27.2292 20.4375 26.4583 19.6875 25.7708 18.8542C25.7083 18.8125 25.6042 18.6667 25.4583 18.4792C25.25 18.2292 24.8958 17.8125 24.5833 17.3333C24.3333 17.0208 24.0417 16.5625 23.7708 16.1042C23.4375 15.5417 23.1458 14.9792 22.8542 14.3958C22.685 14.0333 22.5369 13.6778 22.4016 13.3334C22.2684 12.9941 21.8312 12.8979 21.5735 13.1557L9.04168 25.6875C8.77085 25.9583 8.52085 26.4792 8.45835 26.8333L7.33335 34.8125C7.12501 36.2292 7.52085 37.5625 8.39585 38.4583C9.14585 39.1875 10.1875 39.5833 11.3125 39.5833C11.5625 39.5833 11.8125 39.5625 12.0625 39.5208L20.0625 38.3958C20.4375 38.3333 20.9583 38.0833 21.2083 37.8125L33.733 25.2878C33.9925 25.0283 33.8937 24.5856 33.5524 24.4505C33.2187 24.3184 32.8801 24.1765 32.5208 24.0208Z"
                        fill="#6A6BFF"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_44_112"
                        x="-4"
                        y="0"
                        width="58"
                        height="58"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_44_112"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_44_112"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p className="text-center font-bold text-2xl">Content Writer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border h-32 w-auto p-2 border-4 rounded-lg bg-gray-100 shadow-sm">
              <div className="mx-auto flex items-center mt-[4%]">
                <div className="flex box-border w-20 h-20 bg-gray-200 rounded-full items-center justify-center mx-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.9377 8.22917V16.1458H27.8127V8.22917C27.8127 7.66667 27.3127 7.39584 26.9793 7.39584C26.8752 7.39584 26.771 7.41667 26.6668 7.45834L10.146 13.6875C9.04183 14.1042 8.3335 15.1458 8.3335 16.3333V17.7292C6.43766 19.1458 5.2085 21.4167 5.2085 23.9792V16.3333C5.2085 13.8542 6.72933 11.6458 9.04183 10.7708L25.5835 4.52084C26.0418 4.35417 26.521 4.27084 26.9793 4.27084C29.0627 4.27084 30.9377 5.95834 30.9377 8.22917Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M44.7918 30.2083V32.2917C44.7918 32.8542 44.3543 33.3125 43.7709 33.3333H40.7293C39.6251 33.3333 38.6251 32.5208 38.5418 31.4375C38.4793 30.7917 38.7293 30.1875 39.1459 29.7708C39.5209 29.375 40.0418 29.1667 40.6043 29.1667H43.7501C44.3543 29.1875 44.7918 29.6458 44.7918 30.2083Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M40.5835 26.9792H42.7085C43.8543 26.9792 44.7918 26.0417 44.7918 24.8958V23.9792C44.7918 19.6667 41.271 16.1458 36.9585 16.1458H13.0418C11.271 16.1458 9.646 16.7292 8.3335 17.7292C6.43766 19.1458 5.2085 21.4167 5.2085 23.9792V38C5.2085 42.3125 8.72933 45.8333 13.0418 45.8333H36.9585C41.271 45.8333 44.7918 42.3125 44.7918 38V37.6042C44.7918 36.4583 43.8543 35.5208 42.7085 35.5208H40.896C38.896 35.5208 36.9793 34.2917 36.4585 32.3542C36.021 30.7708 36.5418 29.25 37.5835 28.2292C38.3543 27.4375 39.4168 26.9792 40.5835 26.9792ZM29.1668 26.5625H14.5835C13.7293 26.5625 13.021 25.8542 13.021 25C13.021 24.1458 13.7293 23.4375 14.5835 23.4375H29.1668C30.021 23.4375 30.7293 24.1458 30.7293 25C30.7293 25.8542 30.021 26.5625 29.1668 26.5625Z"
                      fill="#6A6BFF"
                    />
                  </svg>
                </div>
                <p className="text-center font-bold text-2xl">
                  Finance Manager
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: 50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="box-border h-32 w-auto p-2 border-4 rounded-lg bg-gray-100 shadow-sm">
              <div className="mx-auto flex items-center mt-[4%]">
                <div className="flex box-border w-20 h-20 bg-gray-200 rounded-full items-center justify-center mx-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.3957 10.4375L30.3123 6.35416C27.3957 3.4375 22.604 3.4375 19.6873 6.35416L15.604 10.4375C14.7915 11.25 14.7915 12.5833 15.604 13.3958L23.5415 21.3333C24.354 22.1458 25.6665 22.1458 26.479 21.3333L34.4165 13.3958C35.2082 12.5833 35.2082 11.25 34.3957 10.4375Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M10.4373 15.6042L6.354 19.6875C3.43734 22.6042 3.43734 27.3958 6.354 30.3125L10.4373 34.3958C11.2498 35.2083 12.5623 35.2083 13.3748 34.3958L21.3123 26.4583C22.1248 25.6458 22.1248 24.3333 21.3123 23.5208L13.3957 15.6042C12.5832 14.7917 11.2498 14.7917 10.4373 15.6042Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M43.6458 19.6875L39.5625 15.6042C38.75 14.7917 37.4375 14.7917 36.625 15.6042L28.6875 23.5417C27.875 24.3542 27.875 25.6667 28.6875 26.4792L36.625 34.4167C37.4375 35.2292 38.75 35.2292 39.5625 34.4167L43.6458 30.3333C46.5625 27.3958 46.5625 22.6042 43.6458 19.6875Z"
                      fill="#6A6BFF"
                    />
                    <path
                      d="M15.6042 39.5625L19.6875 43.6458C22.6042 46.5625 27.3959 46.5625 30.3125 43.6458L34.3959 39.5625C35.2084 38.75 35.2084 37.4375 34.3959 36.625L26.4584 28.6875C25.6459 27.875 24.3334 27.875 23.5209 28.6875L15.5834 36.625C14.7917 37.4167 14.7917 38.75 15.6042 39.5625Z"
                      fill="#6A6BFF"
                    />
                  </svg>
                </div>
                <p className="text-center font-bold text-2xl">UX/UI designs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-11 grid justify-items-center "
      >
        <button className=" w-48 h-16 bg-violet-700 rounded-lg text-white text-lg font-bold">
          See More
        </button>
      </motion.div>
    </div>
  )
}
