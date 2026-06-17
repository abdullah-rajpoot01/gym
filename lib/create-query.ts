 export const createQuery = ({ gymName, city, phone }: { gymName: string, city: string, phone: string }): string => {
    return `?name=${encodeURIComponent(gymName)}&city=${encodeURIComponent(city)}&phone=${encodeURIComponent(phone)}`
  }