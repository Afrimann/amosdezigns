export interface CustomButtonProps {
    title: string
    containerStyles: string
    handleEvent: () => void
    // type:  MouseEventHandler<HTMLButtonElement>
}

export interface ProjectCardProps {
    title: string
    image: string
    alt: string
}

export interface ReviewDetailsProps {
    image: string
    reviewContent: string
    clientName: string
    clientCompany: string

}
