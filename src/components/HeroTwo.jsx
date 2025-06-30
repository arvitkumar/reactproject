import PIC from "../assets/images/coding.png"
import IMAGE from "../assets/images/png/line.png"
import WHITE from "../assets/images/png/whitebox.png"
import BLUE from "../assets/images/png/blue.png"
import GRAY from "../assets/images/png/gray.png"
const HeroTwo = () => {
  return (
    <>
     <nav className=" bg-red text-white px-[80px] py-6  flex justify-between  items-center">
      <div className="text-2xl px-[80px] text-black font-bold">MyApp</div>

      <div className="flex px-[80px] font-poppins space-x-[40px] items-center text-2xl">
        <h2  className=" text-black cursor-pointer ">Home</h2>
          <h2  className="text-black cursor-pointer">About</h2>
           <h2  className=" text-black cursor-pointer">Services</h2>
           <h2  className=" text-black cursor-pointer">Tranings</h2>

       
            <button className=" bg-white w-[180px] h-[42px] text-black border-[2px] border-[black] rounded-[23px]  font-[24px] px-4 ">
              Contact Us
            </button>
      </div>
    </nav>
     
    <div className="flex justify-between relative  px-[150px] pt-[122px]">
      <div>
        <p className=" w-[682px] text-[46px] font-normal  h-[222px] font-bakbak ">Web Development Turning Your Business into Next-Level Web Experiences</p>
        <p className="w-[514px] h-[96px] font-[20px] ">From concept to launch, our app development <br /> services are tailored to deliver performance,<br /> usability, and results.</p>
     <button class="rounded-[50px]  border-none shadow-[10.3px_0px_0px_10px_#FF9B0F] py-[8px] px-[55px] text-2xl leading-[160.5%] mt-[26px]">Read More</button>
      </div>
      <img className="absolute right-[142px] bottom-0" src={IMAGE} alt="" />
      <img className="absolute right-[476px] bottom-0" src={WHITE} alt="" />
      <img className="absolute right-[250px] bottom-[230px]" src={BLUE} alt="" />
      <img className="absolute right-[550px] bottom-0" src={GRAY} alt="" />
      <img className="" src={PIC} alt="nothing" />
    </div>
    </>
  )
}

export default HeroTwo
