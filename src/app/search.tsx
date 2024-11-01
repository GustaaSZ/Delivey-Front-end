import { Text, View, ScrollView, FlatList } from "react-native";
import { Header } from "../components/header";
import Constants from 'expo-constants'
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { DrawerSceneWrapper } from "../components/drawer-scene-wrapper";
import { useState, useEffect } from "react";
import { ItemFood2 } from "../components/trending/food/index copy"; 
import { FoodProps } from "../components/trending";

const statusBarHeight = Constants.statusBarHeight;
// px = padding interno na esquerda e na direita

export default function Notifications() {

  // Inicialização das listas vazias
  const [foods, setFoods] = useState<FoodProps[]>([]); 
  const [filteredFoods, setFilteredFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.1.12:3000/foods");
      const data = await response.json();
      setFoods(data);
      setFilteredFoods(data); // Inicializa com todos os alimentos
    }
    getFoods();
  }, []);

  const handleSearch = (query: string) => {
    const results = foods.filter(food => 
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoods(results);
  };

  return (
    <DrawerSceneWrapper>
        <View className="w-full px-6" style={{ marginTop: statusBarHeight + 15}}>
          <Header/>

          {/* Passando a função de busca */}
          <Search onSearch={handleSearch}/> 
        </View>

        <FlatList
          data={filteredFoods} // Renderiza os resultados filtrados
          renderItem={({ item }) => <ItemFood2 food={item} />}
          keyExtractor={(item) => item.id}
          horizontal={ false }
          contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}// Adicionando espaçamento entre os elementos da lista
          showsVerticalScrollIndicator={false}
        />
    </DrawerSceneWrapper>
  );
}