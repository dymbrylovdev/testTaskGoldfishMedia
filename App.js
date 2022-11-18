import {StatusBar} from "expo-status-bar";
import NavigationComponent from "./src/navigate";
import { useFonts } from 'expo-font';

function App() {
    const [fontsLoaded] = useFonts({
        'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
        'Manrope-SemiBold': require('./assets/fonts/Manrope-SemiBold.ttf'),
        'Manrope-Medium': require('./assets/fonts/Manrope-Medium.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            <StatusBar style={'auto'} />
            <NavigationComponent/>
        </>
    );
}

export default App;

