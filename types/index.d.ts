interface Comment {
  _id: string;
  name: string;
  text: string;
  createdAt: string;
}

export interface ProjectType {
  _id: string;
  title: string;
  cover_img: string;
  description: string;
  live_link: string;
  github_link?: string;
  likes: number;
  views: number;
  featured: boolean;
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
