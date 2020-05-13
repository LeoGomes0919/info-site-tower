import React, {useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Father from 'react-native-vector-icons/Feather';

import getRealm from '~/services/realm';

import {Container, HeaderTop, Logo} from '~/pages/Main/styles';
import {
  Form,
  InputName,
  InputText,
  Button,
  TitleButton,
  Navigation,
  Text,
} from './styles';
import logoImg from '~/assets/logo.png';

export default function New() {
  const BLUE = '#049ffb';

  const navigation = useNavigation();

  const code = Math.floor(Math.random() * 16777215);

  const [sites, setSites] = useState([]);

  const [id] = useState(code);
  const [name, setName] = useState('');
  const [numBank, setNumBank] = useState();
  const [dateBank, setDateBank] = useState('');
  const [numUr, setNumUr] = useState();
  const [typeUr, setTypeUr] = useState('');
  const [consumption, setConsumption] = useState('');
  const [autonomyHr, setAutonomyHr] = useState('');

  function returnListSite() {
    navigation.navigate('List', {sites});
  }

  async function handleSaveSite() {
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
      realm.create('Site', data);
    });
  }

  async function loadSites() {
    const realm = await getRealm();

    const data = await realm.objects('Site').sorted('name', false);
    setSites(data);
  }

  async function handleAddSite() {
    try {
      if (name === '' || numBank == null || numUr == null) {
        Alert.alert('Erro', 'Verifique as informações', [{cancelable: true}]);
      } else {
        await handleSaveSite();
        Alert.alert('Aviso', 'Registro salvo com sucesso!', [
          {text: 'Ok', onPress: returnListSite},
        ]);
        loadSites;
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <HeaderTop>
        <Logo source={logoImg} />
        <Navigation onPress={returnListSite}>
          <Father name="arrow-left" size={19} color="#049ffb" />
          <Text>Voltar a Lista</Text>
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

        <Button onPress={handleAddSite}>
          <TitleButton>Cadastrar</TitleButton>
          <Father name="save" size={20} color="#fff" />
        </Button>
      </Form>
    </Container>
  );
}
