import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AuthContext } from "../context/AuthProvider";

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* Ảnh nền */}
      <View style={styles.headerBackground} />

      {/* Thông tin người dùng */}
      <View style={styles.profileContainer}>
        <Text style={styles.name}>Hoan</Text>
        <Text style={styles.role}>Mobile developer</Text>
        <Text style={styles.description}>
          I have above 5 years of experience in native mobile apps development,
          now I am learning React Native.
        </Text>

        {/* Nút đăng xuất */}
        <TouchableOpacity style={styles.signOutButton} onPress={logout}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },

  // Phần nền màu xanh trên cùng
  headerBackground: {
    height: 150,
    backgroundColor: "#00AEEF",
  },

  // Khối chứa thông tin cá nhân
  profileContainer: {
    backgroundColor: "white",
    margin: 10,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },

  name: { fontSize: 22, fontWeight: "bold", marginBottom: 5 },
  role: { fontSize: 16, color: "#00AEEF", marginBottom: 10 },
  description: { textAlign: "center", color: "#555", marginBottom: 20 },

  signOutButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  signOutText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default ProfileScreen;
