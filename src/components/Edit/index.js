import React, {useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Father from 'react-native-vector-icons/Feather';

import getRealm from '~/services/realm';

import {Span, Navigation, Text} from './styles';

import {Container, HeaderTop, Logo, Content, Title} from '~/pages/Main/styles';
import {Form, InputName, InputText, Button, TitleButton} from '../New/styles';
import logoImg from '~/assets/logo.png';

export default function Edit() {
  const BLUE = '#049ffb';

  const navigation = useNavigation();
  const route = useRoute();

  const siteById = route.params.siteById;

  const [sites, setSites] = useState([]);

  const [id] = useState(siteById.id);
  const [name, setName] = useState(siteById.name);
  const [numBank, setNumBank] = useState(siteById.numBank.toString());
  const [dateBank, setDateBank] = useState(siteById.dateBank);
  const [numUr, setNumUr] = useState(siteById.numUr.toString());
  const [typeUr, setTypeUr] = useState(siteById.typeUr);
  const [consumption, setConsumption] = useState(siteById.consumption);
  const [autonomyHr, setAutonomyHr] = useState(siteById.autonomyHr);

  function returnDetailSite() {
    navigation.navigate('Details', {sites});
  }

  async function handleUpdate() {
    const data = {
      id: id,
      name: name,
      numBank: parseInt(numBank),
      dateBank: dateBank,
      numUr: parseInt(numUr),
      typeUr: typeUr,
      consumption: consumption,
      autonomyHr: autonomyHr,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Site', data, 'modified');
    });
  }

  async function loadSites() {
    const realm = await getRealm();

    const data = await realm.objects('Site').sorted('name', false);
    setSites(data);
  }

  async function handleUpdateSite() {
    try {
      if (name === '' || numBank == null || numUr == null) {
        Alert.alert('Erro', 'Verifique as informações', [{cancelable: true}]);
      } else {
        await handleUpdate();
        Alert.alert('Aviso', 'Registro alterado com sucesso!', [
          {text: 'Ok', onPress: returnDetailSite},
        ]);
        loadSites;
      }
    } catch (err) {
      Alert.alert('Erro', 'Verifique as informações', [{cancelable: true}]);
    }
  }

  return (
    <Container>
      <HeaderTop>
        <Logo source={logoImg} />
        <Navigation onPress={returnDetailSite}>
          <Father name="arrow-left" size={19} color="#049ffb" />
          <Text>Voltar aos Detalhes</Text>
        </Navigation>
      </HeaderTop>

      <Form>
        <InputName
          value={name}
          onChangeText={setName}
          underlineColorAndroid={BLUE}
          placeholderTextColor="#777"
          placeholder="Sigla do site"
          autoCapitalize="characters"
          maxLength={20}
        />
        <InputText
          value={numBank}
          onChangeText={setNumBank}
          underlineColorAndroid={BLUE}
          placeholderTextColor="#777"
          placeholder="Número de bancos"
          autoCapitalize="none"
          maxLength={2}
          keyboardType="numeric"
        />
        <InputText
          value={dateBank}
          onChangeText={setDateBank}
          underlineColorAndroid={BLUE}
          placeholderTextColor="#777"
          placeholder="Fabricação Mês/Ano"
          autoCapitalize="none"
          maxLength={5}
        />

        <InputText
          value={numUr}
          onChangeText={setNumUr}
          underlineColorAndroid={BLUE}
          placeholderTextColor="#777"
          placeholder="Número de URs"
          autoCapitalize="none"
          maxLength={2}
          keyboardType="numeric"
        />
        <InputText
          value={typeUr}
          onChangeText={setTypeUr}
          underlineColorAndroid={BLUE}
          placeholderTextColor="#777"
          placeholder="Tipo de UR"
          autoCapitalize="sentences"
          maxLength={15}
        />

        <InputText
          value={consumption}
          onChangeText={setConsumption}
          underlineColorAndroid={BLUE}
          placeholderTextColor="#777"
          placeholder="Consumo"
          autoCapitalize="none"
          maxLength={5}
          keyboardType="numeric"
        />

        <InputText
          value={autonomyHr}
          onChangeText={setAutonomyHr}
          underlineColorAndroid={BLUE}
          placeholderTextColor="#777"
          placeholder="Autonomia horas"
          autoCapitalize="none"
          maxLength={3}
          keyboardType="numeric"
        />

        <Button onPress={handleUpdateSite}>
          <TitleButton>Atualizar</TitleButton>
          <Father name="refresh-ccw" size={20} color="#fff" />
        </Button>
      </Form>
    </Container>
  );
}
