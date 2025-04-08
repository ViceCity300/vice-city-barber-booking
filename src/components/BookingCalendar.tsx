
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface BookingCalendarProps {
  onBookingConfirm: (date: Date | undefined, time: string, chairId: string) => void;
  userType: "barber" | "client";
}

const BookingCalendar = ({ onBookingConfirm, userType }: BookingCalendarProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");
  const [chairId, setChairId] = useState("");

  // Mock data - in a real app, these would come from your API
  const availableTimes = [
    "9:00", "9:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const availableChairs = [
    { id: "chair1", name: "Chaise 1" },
    { id: "chair2", name: "Chaise 2" },
    { id: "chair3", name: "Chaise 3" },
    { id: "chair4", name: "Chaise 4" }
  ];

  const handleConfirm = () => {
    if (date && time && (userType === "client" || chairId)) {
      onBookingConfirm(date, time, chairId);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="border rounded-md p-4 flex-grow">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md pointer-events-auto"
          disabled={(date) => {
            // Disable past dates, Sundays (weekend)
            return date < new Date() || date.getDay() === 0;
          }}
        />
      </div>
      <div className="flex flex-col gap-4 flex-grow">
        <div>
          <label className="block text-sm font-medium mb-1">Heure</label>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger>
              <SelectValue placeholder="Choisir une heure" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {availableTimes.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {userType === "barber" && (
          <div>
            <label className="block text-sm font-medium mb-1">Chaise</label>
            <Select value={chairId} onValueChange={setChairId}>
              <SelectTrigger>
                <SelectValue placeholder="Choisir une chaise" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {availableChairs.map((chair) => (
                  <SelectItem key={chair.id} value={chair.id}>
                    {chair.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <Button
          onClick={handleConfirm}
          disabled={!date || !time || (userType === "barber" && !chairId)}
          className={userType === "barber" ? "bg-vice-teal hover:bg-vice-teal/90" : "bg-vice-magenta hover:bg-vice-magenta/90"}
        >
          {userType === "barber" ? "Réserver la chaise" : "Confirmer le rendez-vous"}
        </Button>
      </div>
    </div>
  );
};

export default BookingCalendar;
