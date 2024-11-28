'use client'
import { ProjectList } from '@/utils'
import React from 'react'
import ProjectCard from './ProjectCard'
import CustomButton from './CustomButton'

const Projects = () => {
    const handleViewProjects = () => {

    }
    return (
        <div className='project__wrapper'>
            <h2 className='project__intro'>
                Some Recent Projects
            </h2>

            <div className='project__listing'>
                <div className='w-full flex flex-wrap items-center justify-between gap-6'>
                    {
                        ProjectList.map((project, id) => (
                            <ProjectCard
                                key={id}
                                title={project.title}
                                image={project.image}
                                alt={project.alt}
                            />
                        ))
                    }
                </div>
            </div>

            <div>
                <CustomButton
                    title='View All Projects'
                     containerStyles='border-button-border text-custom text-[13px] px-6 py-2 rounded-lg'
                     handleEvent={handleViewProjects}
                />
            </div>
        </div>
    )
}

export default Projects