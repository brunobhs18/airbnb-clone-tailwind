'use client';

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";

interface EmpptyState {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

const EmptyState: React.FC<EmpptyState> = ({
    title = "Sem correspondências exatas",
    subtitle = "Tente alterar ou remover alguns de seus filtros",
    showReset
}) => {
    const router = useRouter();

    return(
        <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
            <Heading title={title}
                subtitle={subtitle}
                center
            />
            <div className="w-48 mt-4">
                {showReset && (
                    <Button outline
                        label="Remova todos os Filtros"
                        onClick={() => router.push('/')} 
                    />
                )}
            </div>

        </div>
    )
}

export default EmptyState;