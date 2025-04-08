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
  onBookingConfirm: (date: Date | undefined, startTime: string, endTime: string, chairId: string) => void;
  userType: "barber" | "client";
}

const BookingCalendar = ({ onBookingConfirm, userType }: BookingCalendarProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [chairId, setChairId] = useState("");

  // Mock data - in a real app, these would come from your API
  const availableTimes = [
    "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const availableChairs = [
    { id: "chair1", name: "Chaise 1" },
    { id: "chair2", name: "Chaise 2" },
    { id: "chair3", name: "Chaise 3" },
    { id: "chair4", name: "Chaise 4" }
  ];

  const handleStartTimeChange = (time: string) => {
    setStartTime(time);
    
    // Auto-select end time to be 1 hour after start time
    const timeIndex = availableTimes.indexOf(time);
    if (timeIndex < availableTimes.length - 1) {
      setEndTime(availableTimes[timeIndex + 1]);
    } else {
      // If last time slot is selected, keep end time empty
      setEndTime("");
    }
  };

  const handleEndTimeChange = (time: string) => {
    setEndTime(time);
  };

  const availableEndTimes = () => {
    if (!startTime) return [];
    const startIndex = availableTimes.indexOf(startTime);
    return startIndex >= 0 ? availableTimes.slice(startIndex + 1) : [];
  };

  const handleConfirm = () => {
    if (date && startTime && endTime && (userType === "client" || chairId)) {
      onBookingConfirm(date, startTime, endTime, chairId);
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
          <label className="block text-sm font-medium mb-1">Heure de début</label>
          <Select value={startTime} onValueChange={handleStartTimeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Choisir une heure de début" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {availableTimes.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Heure de fin</label>
          <Select value={endTime} onValueChange={handleEndTimeChange} disabled={!startTime}>
            <SelectTrigger>
              <SelectValue placeholder={!startTime ? "Choisir d'abord une heure de début" : "Choisir une heure de fin"} />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {availableEndTimes().map((t) => (
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
          disabled={!date || !startTime || !endTime || (userType === "barber" && !chairId)}
          className={userType === "barber" ? "bg-vice-teal hover:bg-vice-teal/90" : "bg-vice-magenta hover:bg-vice-magenta/90"}
        >
          {userType === "barber" ? "Réserver la chaise" : "Confirmer le rendez-vous"}
        </Button>
      </div>
    </div>
  );
};

export default BookingCalendar;
