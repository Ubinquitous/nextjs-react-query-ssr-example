import getQueryClient from "./getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import PageClient from "./PageClient";
import axios from "axios";

const Page = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryFn: fetchData,
    queryKey: ["query"],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageClient />
    </HydrationBoundary>
  );
};

const fetchData = async () => {
  // prettier-ignore
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  return data;
};

export default Page;
