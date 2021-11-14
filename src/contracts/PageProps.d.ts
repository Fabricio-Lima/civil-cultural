

interface Publication {
    id: string;
    author_id: string;
    published_at: string;
    content: string;
    image: string;
    video: string;
    type_publication: string;
    title: string;
    subtitle: string;
}

export interface PublicationProps {
    publication: Publication;
}

export interface PublicationArrayProps {
    publications: Publication[];
}