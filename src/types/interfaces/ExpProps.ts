interface Experience {
    id: number;
    autor: string;
    description: string;
    img: string;
}

export interface ExpProps {
    isMobile: boolean;
    experiences: Experience[]
}