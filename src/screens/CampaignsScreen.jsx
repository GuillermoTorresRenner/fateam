import { StyleSheet, Text, View } from "react-native";
import React from "react";
//llamada a las funciones para poder usar el store
import { useDispatch, useSelector } from "react-redux";
//importar el slice de la campaña
import { setCampaign } from "../features/CampaignSlice";

export default function CampaignsScreen() {
  /*Llamamos al store mediante ek hook de useSelector
  desde donde extraemos el state global qu vamos a usar
  */
  const campaign = useSelector((state) => state.campaign.campaign);

  /* declaramos el dispatch para poder llamar a las funciones
  que declaramos en el reducerdel slice
  */
  const dispatch = useDispatch();
  return (
    <View>
      <Text>CampaignsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
