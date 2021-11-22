import {useEffect, useState} from "react";
import {CircularProgress, Container, Grid} from "@mui/material";
import MUIDataTable from "mui-datatables";

const Quotes = () => {
    const [loaded, setLoaded] = useState(false);
    const [quotes, setQuotes] = useState({});

    useEffect(() => {
        if (loaded) return;

        fetch(`${process.env.REACT_APP_OUTSIDE_API_URL}/quotes`)
            .then(res => res.json())
            .then(result => {
                setQuotes(result);
            });
    })

    useEffect(() => {
        if (quotes.length > 0) {
            setLoaded(true);
        }
    }, [quotes]);

    return (
        <Container maxWidth={'md'}>
            {/*<Grid*/}
            {/*    container*/}
            {/*    spacing={0}*/}
            {/*    direction="column"*/}
            {/*    alignItems="center"*/}
            {/*    justifyContent="center"*/}
            {/*>*/}
            {/*    <Grid item xs={12}>*/}
            {/*        <Typography variant={'h2'} color={'secondary'}>Quotes</Typography>*/}
            {/*    </Grid>*/}

            {/*    {!loaded ? (*/}
            {/*        <Grid item xs={12}>*/}
            {/*            <CircularProgress color={'secondary'}/>*/}
            {/*        </Grid>*/}
            {/*    ) : quotes.map((quote) => quote.content)*/}
            {/*    }*/}
            {!loaded ?
                <Grid item xs={12}>
                    <CircularProgress color={'secondary'}/>
                </Grid> :
                <MUIDataTable
                    title={'Quotes'}
                    data={quotes}
                />
            }

        </Container>
    )
}

export default Quotes;