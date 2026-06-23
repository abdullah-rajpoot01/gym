type GymParams = {
  id?: string | null;
  hasData?: boolean;

  gymName?: string;
  city?: string;
  phone?: string;
  mode?: string;
};

export const createQuery = ({
  id,
  hasData,
  gymName = "",
  city = "",
  phone = "",
  mode = "light",
}: GymParams): string => {
  // Case 1: lead exists → only send id
  if (id && hasData) {
    return `?id=${encodeURIComponent(id)}`;
  }

  // Case 2: fallback → full query
  const params = new URLSearchParams();

  if (gymName) params.append("name", gymName);
  if (city) params.append("city", city);
  if (phone) params.append("phone", phone);
  if (mode) params.append("mode", mode);

  const query = params.toString();

  return query ? `?${query}` : "";
};