import { hotelTypes } from "../config/hotel-type-option";

type Props = {
  selectedTypeHotels: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HotelTypesFilter = ({ selectedTypeHotels, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="mb-2 text-md font-semibold">Hotel Type</h4>
      {hotelTypes.map((type) => (
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded "
            value={type}
            checked={selectedTypeHotels.includes(type)}
            onChange={onChange}
          />
          <span>{type}</span>
        </label>
      ))}
    </div>
  );
};

export default HotelTypesFilter;
