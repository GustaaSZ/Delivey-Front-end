import { Text, View, ScrollView, } from "react-native";
import { Header } from "../components/header";
import Constants from 'expo-constants'
import { Banner } from "../components/banner";
import { Section } from "../components/section";
import { DrawerSceneWrapper } from "../components/drawer-scene-wrapper"
import { TrendingFoods } from "../components/trending";
import { TrendingRestaurants } from "../components/trendingRe";

// Constante pra definir uma altura padrão na view
const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <DrawerSceneWrapper>
      <ScrollView 
        style={{ flex: 1, backgroundColor: '#18181b' }} 
        className="bg-zinc-900 text-zinc-300"
        showsVerticalScrollIndicator={false}
      >
        {/* px = padding interno na esquerda e na direita */}
        <View className="w-full px-6" style={{ marginTop: statusBarHeight + 15 }}>
          <Header/>

          <Banner/>
          
          {/* <Search/> */}
          <View style={{ height: 1 }} className="rounded-full w-90 gap-1 bg-zinc-600 my-6"></View>
        </View>

        <Section 
          name="Comidas em Alta no DeliveryExpress"
          size="text-xl"
          label=""
          action={ () => console.log("Clicou no veja mais")}
        />

        {/* Chamando o  trendingFoods para os famosos no app*/}
        <TrendingFoods categoryId="9"/>
        <View className="mb-5"></View>

        <Section 
          name="Restaurantes Famosos no DeliveryExpress"
          size="text-xl"
          label=""
          action={ () => console.log("Clicou no veja mais")}
        />

        {/* Chamando o  trendingRestaurants*/}
        <TrendingRestaurants/>
        <View className="mb-2"></View>

        <Section 
          name="Hamburgueres em Alta "
          size="text-xl"
          label=""
          action={ () => console.log("Clicou no veja mais")}
        />

        {/* Chamando o  trendingFoods*/}
        <TrendingFoods categoryId="1"/>

        <View className="mt-10"></View>

        

      </ScrollView>
    </DrawerSceneWrapper>
  );
}
