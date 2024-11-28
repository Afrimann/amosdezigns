import { ProjectCardProps } from '@/types'
import Image from 'next/image'

const ProjectCard = ({ title, image, alt }: ProjectCardProps) => {
    return (
        <div className='project__card'>
            <div className='flex justify-between text-white w-full'>
                <span >
                    {title}
                </span>
                <Image
                    src='/arrowUp.png'
                    alt='arrow icon'
                    width={30}
                    height={30}
                    className='object-contain'
                />
            </div>
            <div className='w-full'>
                <Image
                    src={image}
                    alt={alt}
                    width={500}
                    height={500}
                    className='object-contain'
                />
            </div>
        </div>
    )
}

export default ProjectCard