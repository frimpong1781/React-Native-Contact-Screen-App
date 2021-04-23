import React from "react";
import { View, FlatList, Text } from "react-native";
import Contact from "./components/Contact";

const ContactScreen = () => {
     const contacts = [
          { name: "Sam Bob", number: "026-345-7865" },
          { name: "James Frimpong", number: "024-765-9087" },
          { name: "Halimatu Abubakar", number: "026-786-3245" },
          { name: "Samuel Owusu", number: "026-675-3452" },
          { name: "Princess Linda", number: "027-345-4532" },
          { name: "Akua Abban", number: "027-234-7865" },
          { name: "Gideon Baidoo", number: "020-987-2453" },
          { name: "Kweku Paati", number: "020-876-7653" },
          { name: "Josephine Acheampong", number: "027-003-9080" },
          { name: "Edith Darko", number: "055-234-6743" },
          { name: "Doris Amoah", number: "023-027-7601" },
          { name: "Kweku Paati", number: "020-001-4322" },
     ];

     return (
          <View>
               <FlatList
                    data={contacts}
                    renderItem={({ item }) => {
                         return (
                              <Contact name={item.name} phone={item.number} />
                         );
                    }}
                    keyExtractor={(item) => item.number}
                    showsVerticalScrollIndicator={false}
               />
          </View>
     );
};

export default ContactScreen;
