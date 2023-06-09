import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return (
            <ClientOnly>
                <EmptyState title="Não autorizado"
                    subtitle="Por favor faça login"
                />
            </ClientOnly>
        );
    }

    const reservations = await getReservations({
        authorId: currentUser.id
    });

    if (reservations.length == 0) {
        return (
            <ClientOnly>
                <EmptyState title="Reservas não encontradas"
                    subtitle="Parece que você não fez nenhuma reserva"
                />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <ReservationsClient reservations={reservations}
               currentUser={currentUser} 
            />
        </ClientOnly>
    )
}

export default ReservationsPage;