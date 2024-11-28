import { ReviewDetails } from '@/utils';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ReviewContentProps {
  selected: number;
}

const ReviewContent = ({ selected }: ReviewContentProps) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS once
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS whenever `selected` changes
  }, [selected]);

  return (
    <div className="mt-[4rem]">
      <div className="absolute left-[46%] top-[4rem] shadow-lg">
        <Image
          src={ReviewDetails[selected].image}
          alt="Client Image"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="bg-custom-blue w-[700px] h-[250px] flex flex-col items-center rounded-xl">
        <div className="text-center mt-[4rem] font-roboto">
          <p className="paragraph px-8" data-aos="fade-in" key={selected}>
            {ReviewDetails[selected].reviewContent}
          </p>
          <div className="mt-6">
            <h2 className="text-[18px]" data-aos="fade-in" key={`name-${selected}`}>
              {ReviewDetails[selected].clientName}
            </h2>
            <h3 className="text-[16px]" data-aos="fade-in" key={`company-${selected}`}>
              {ReviewDetails[selected].clientCompany}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewContent;
