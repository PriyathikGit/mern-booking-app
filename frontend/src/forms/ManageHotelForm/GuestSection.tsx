import { useFormContext } from 'react-hook-form';
import { HotelformData } from './ManageHotelForm';

const GuestSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelformData>();
  return (
    <div>
      <h2 className="text-3xl font-bold mb-3">Guests</h2>
      <div className="grid grid-cols-2 p-6 gap-5 bg-gray-300">
        <label className="text-gray-700 text-sm font-semibold">
          Adults
          <input
            type="number"
            className="border rounded w-full py-2 px-3 font-normal"
            min={1}
            {...register('adultCount', { required: 'this field is required' })}
          />
          {errors.adultCount?.message && (
            <span className="text-red-500 text-sm font-bold">
              {errors.adultCount?.message}
            </span>
          )}
        </label>

        <label className="text-gray-700 text-sm font-semibold">
          Children
          <input
            type="number"
            className="border rounded w-full py-2 px-3 font-normal"
            min={0}
            {...register('childCount', { required: 'this field is required' })}
          />
          {errors.childCount?.message && (
            <span className="text-red-500 text-sm font-bold">
              {errors.childCount?.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestSection