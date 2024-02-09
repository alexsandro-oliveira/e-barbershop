"use server";

import { db } from "@/app/_lib/prisma";
import { endOfDay, startOfDay } from "date-fns";

export const getDayBookings = async (barbershopId: string, date: Date) => {
  const booking = await db.booking.findMany({
    where: {
      barbershopId,
      date: {
        lte: endOfDay(date), // menor(lte) que o final do dia
        gte: startOfDay(date), //maior(gte) que o final do dia
      },
    },
  });

  return booking;
};
