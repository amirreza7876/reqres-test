import { Grid } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import DataSection from "./components/DataSection";
import PaginationSection from "./components/PaginationSection";
import Search from "./components/Search";
import DataContextProvider from "./DataContext";

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                refetchOnReconnect: true,
                retry: 2,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                m={2}
                justifyContent="center"
            >
                <DataContextProvider>
                    <Search />
                    <DataSection />
                    <PaginationSection />
                </DataContextProvider>
            </Grid>
        </QueryClientProvider>
    );
}

export default App;
