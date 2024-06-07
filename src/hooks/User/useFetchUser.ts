import { User } from "@/@types/app";
import { QueryKeys } from "@/setup/QueryKeys";
import { authedApi } from "@/setup/api";
import { QueryKeys } from "@/setup/QueryKeys";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (): Promise<User> => {
  const storagedData = await AsyncStorage.getItem("@app-doacao:AuthToken");

  if (!storagedData) {
    return null;
  }
  
  const response = await authedApi.get(`/donator`);
  
  return response.data;
};

export function useFetchUser() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: [QueryKeys.UserData],
    retry: 3,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 30,
    refetchOnMount: true,
  });

  return query;
}
