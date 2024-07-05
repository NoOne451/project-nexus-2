import { RootState } from '@/Store/store';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export const Footer = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div
      id="contact"
      className=" py-[40px] capitalize text-justify flex flex-col  md:flex-row md:justify-around bg-black px-5 pb-[80px] sm:pb-[40px]"
    >
      <div className="md:w-[300px]">
        <p className="md:text-[25px]  text-[20px] font-[400] text-customGreen">
          Sign up with OTP
        </p>
        <div className="">
          <p className="pt-[30px] pb-[15px] text-bg md:text-[16px] text-[14px]">
            "Discover the flavors of our authentic, mouthwatering biryani by
            signing up today!"
          </p>
          {!user.isAuthenticated && (
            <Link
              href="/auth/signup"
              className="px-20 py-2 border capitalize border-customGreen bg-customGreen text-white rounded-[3px] hover:text-customGreen hover:bg-transparent hover:transition-all hover:border "
            >
              sign up
            </Link>
          )}
        </div>
      </div>
      <div>
        <p className="pt-[25px] md:pt-0 md:text-[25px]  text-[20px] font-[400] text-customGreen">
          support links
        </p>
        <div className="py-[25px] flex flex-col [&>a]:text-bg md:text-[16px] text-[14px] ">
          <a href="" className="py-[5px] hover:text-customGreen">
            privacy policy
          </a>
          <a href="" className="py-[5px] hover:text-customGreen">
            cancellation & refund
          </a>
          <a href="" className="py-[5px] hover:text-customGreen">
            terms & conditions
          </a>
          <a href="" className="py-[5px] hover:text-customGreen">
            shipping & delivery
          </a>
        </div>
      </div>
      <div>
        <p className="text-[25px] font-[400] text-customGreen">contact</p>
        <div className="pt-[25px] flex flex-col md:w-[300px] [&>p]:py-[5px] [&>*]:text-bg ">
          <p className="">
            <span className="mr-1 ">chennai:</span>Cloud Kitchen Opp to
            koyambedu bus stand, jai nagar, 2nd main road, arumbakkam
          </p>
          <p>
            Email:
            <span>
              <a
                href="mailto:thookubiriyani@gmail.com"
                className="ml-1 hover:text-customGreen"
              >
                thookubiriyani@gmail.com
              </a>
            </span>
          </p>

          <p>
            Mobile:
            <span>
              <a href="" className="py-[5px] ml-1 hover:text-customGreen">
                +91 73392 20695
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center pt-[10px] gap-3 [&>a>img]:cursor-pointer [&>a>img]:w-[32px] [&>a>img]:h-[32px] [&>a>img]:transition-all [&>a>img]:duration-500 [&>a>img]:rounded-lg">
          <a href="https://www.instagram.com/thooku.biriyani?igsh=cGJ2cGoxbm1jdTB4">
<<<<<<< HEAD
            <img src="/instagram_icon.svg" className=" " alt="" />
          </a>
          <a href="https://wa.me/917339220695">
            <img src="/whatsapp_icon.svg" className=" " alt="" />
            {/* <svg
              height="32px"
              version="1.1"
              viewBox="0 0 509 512"
              fill="white"
              width="32px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <desc />
              <defs />
              <g fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                <path
                  d="M259.253137,0.00180389396 C121.502859,0.00180389396 9.83730687,111.662896 9.83730687,249.413175 C9.83730687,296.530232 22.9142299,340.597122 45.6254897,378.191325 L0.613226597,512.001804 L138.700183,467.787757 C174.430395,487.549184 215.522926,498.811168 259.253137,498.811168 C396.994498,498.811168 508.660049,387.154535 508.660049,249.415405 C508.662279,111.662896 396.996727,0.00180389396 259.253137,0.00180389396 L259.253137,0.00180389396 Z M259.253137,459.089875 C216.65782,459.089875 176.998957,446.313956 143.886359,424.41206 L63.3044195,450.21808 L89.4939401,372.345171 C64.3924908,337.776609 49.5608297,295.299463 49.5608297,249.406486 C49.5608297,133.783298 143.627719,39.7186378 259.253137,39.7186378 C374.871867,39.7186378 468.940986,133.783298 468.940986,249.406486 C468.940986,365.025215 374.874096,459.089875 259.253137,459.089875 Z M200.755924,146.247066 C196.715791,136.510165 193.62103,136.180176 187.380228,135.883632 C185.239759,135.781068 182.918689,135.682963 180.379113,135.682963 C172.338979,135.682963 164.002301,138.050856 158.97889,143.19021 C152.865178,149.44439 137.578667,164.09322 137.578667,194.171258 C137.578667,224.253755 159.487251,253.321759 162.539648,257.402027 C165.600963,261.477835 205.268745,324.111057 266.985579,349.682963 C315.157262,369.636141 329.460495,367.859106 340.450462,365.455539 C356.441543,361.9639 376.521811,350.186865 381.616571,335.917077 C386.711331,321.63837 386.711331,309.399797 385.184018,306.857991 C383.654475,304.305037 379.578667,302.782183 373.464955,299.716408 C367.351242,296.659552 337.288812,281.870254 331.68569,279.83458 C326.080339,277.796676 320.898622,278.418749 316.5887,284.378615 C310.639982,292.612729 304.918689,301.074268 300.180674,306.09099 C296.46161,310.02856 290.477218,310.577055 285.331175,308.389764 C278.564174,305.506821 259.516237,298.869139 236.160607,278.048627 C217.988923,261.847958 205.716906,241.83458 202.149458,235.711949 C198.582011,229.598236 201.835077,225.948292 204.584241,222.621648 C207.719135,218.824546 210.610997,216.097679 213.667853,212.532462 C216.724709,208.960555 218.432625,207.05866 220.470529,202.973933 C222.508433,198.898125 221.137195,194.690767 219.607652,191.629452 C218.07588,188.568136 205.835077,158.494558 200.755924,146.247066 Z"
                  id="whatsup"
                />
              </g>
            </svg> */}
=======
            <img src="instagram_icon.svg" alt="" />
          </a>
          <a href="https://wa.me/917339220695">
            <img src="whatsapp_icon.svg" alt="" />
>>>>>>> abba9f2d121213775b5218199cf5d8ec5946ab80
          </a>
        </div>
      </div>
    </div>
  );
};
