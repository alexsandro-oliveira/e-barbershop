import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import BookingItem from "../_components/booking-item";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import { authOptions } from "../api/auth/[...nextauth]/route";

const BookingsPage = async () => {
  // recuperar a sessão de usuário (ver se está logado ou não)
  const session = await getServerSession(authOptions);

  // se não estiver logado, redirecionar para login/home
  if (!session?.user) {
    redirect("/");
  }

  // buscar os agendamentos dos usuários no banco onde a date é >= que a data atual ou < que a data atual, e função para rodar as query em paralelo através da promise.all
  const [confirmedBookings, finishedBookings] = await Promise.all([
    db.booking.findMany({
      where: {
        userId: (session.user as any).id,
        date: {
          gte: new Date(),
        },
      },
      include: {
        service: true,
        barbershop: true,
      },
    }),
    db.booking.findMany({
      where: {
        userId: (session.user as any).id,
        date: {
          lt: new Date(),
        },
      },
      include: {
        service: true,
        barbershop: true,
      },
    }),
  ]);

  /*
  //função para separar os agendamentos confirmados (>= data atual) e finalizados (< data atual)
  const confirmedBookings = bookings.filter((booking) =>
    isFuture(booking.date)
  );
  const finishedBookings = bookings.filter((booking) => isPast(booking.date));
  */

  return (
    <>
      <Header />

      <div className="py-6 px-5 ">
        <h1 className="text-xl font-bold">Agendamentos</h1>

        {confirmedBookings.length === 0 && finishedBookings.length === 0 && (
          <h2 className="text-gray-400 uppercase font-bold text-sm mt-6 mb-3">
            Confirmados
          </h2>
        )}

        <div className="flex flex-col gap-3 pt-2">
          {confirmedBookings.map((booking) => (
            <BookingItem key={booking.id} booking={booking} />
          ))}
        </div>

        <h2 className="text-gray-400 uppercase font-bold text-sm mt-6 mb-3">
          Finalizados
        </h2>

        <div className="flex flex-col gap-3 pt-2">
          {finishedBookings.map((booking) => (
            <BookingItem key={booking.id} booking={booking} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookingsPage;
