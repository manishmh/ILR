'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function ProjectsPage ()  {
    const router = useRouter();

    useEffect(() => {
        router.push('/') 
    })
}

export default ProjectsPage;