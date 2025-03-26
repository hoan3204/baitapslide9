import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Danh mục món ăn
const categories = [
  { id: "1", name: "Pizza", image: require("../../assets/pizza.png") },
  { id: "2", name: "Burgers", image: require("../../assets/burger.png") },
  { id: "3", name: "Steak", image: require("../../assets/steak.png") },
];

// Món ăn phổ biến
const popularItems = [
  { id: "1", name: "Food 1", price: "1$", country: "By Viet Nam", image: require("../../assets/food1.png") },
  { id: "2", name: "Food 2", price: "3$", country: "By Viet Nam", image: require("../../assets/food2.png") },
];

// Món giảm giá
const saleOffItems = [
  { id: "1", name: "Discount Food", price: "2$", country: "By Viet Nam", image: require("../../assets/discount.png"), discount: "10% OFF" },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="location-outline" size={24} color="black" />
        <TextInput style={styles.searchBar} placeholder="Search for meals or area" />
        <Ionicons name="search-outline" size={24} color="black" />
      </View>

      {/* Categories */}
      <SectionHeader title="Top Categories" buttonText="Filter" />
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Popular Items */}
      <SectionHeader title="Popular Items" buttonText="View all" />
      <FlatList
        data={popularItems}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FoodItem item={item} />}
        showsHorizontalScrollIndicator={false}
      />

      {/* Sale-off Items */}
      <SectionHeader title="Sale-off Items" buttonText="View all" />
      <FlatList
        data={saleOffItems}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FoodItem item={item} isDiscount />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

// Component tiêu đề của từng section
const SectionHeader = ({ title, buttonText }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <TouchableOpacity>
      <Text style={styles.viewAll}>{buttonText}</Text>
    </TouchableOpacity>
  </View>
);

// Component hiển thị món ăn
const FoodItem = ({ item, isDiscount }) => (
  <View style={styles.foodCard}>
    <Image source={item.image} style={styles.foodImage} />
    {isDiscount && <Text style={styles.discountTag}>{item.discount}</Text>}
    <Text style={styles.foodName}>{item.name}</Text>
    <Text style={styles.foodCountry}>{item.country}</Text>
    <Text style={styles.foodPrice}>{item.price}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 10,
  },
  searchBar: {
    flex: 1,
    marginTop:5,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAll: {
    color: "#FF6B00",
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 15,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
  },
  foodCard: {
    width: 140,
    padding: 10,
    marginRight: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    position: "relative",
  },
  foodImage: {
    width: "100%",
    height: 90,
    borderRadius: 10,
  },
  discountTag: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: "red",
    color: "white",
    paddingHorizontal: 5,
    fontSize: 12,
    borderRadius: 5,
  },
  foodName: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  foodCountry: {
    fontSize: 12,
    color: "#888",
  },
  foodPrice: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default HomeScreen;
