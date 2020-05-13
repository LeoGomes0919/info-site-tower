import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import logoImg from '~/assets/logo.png';
import getRealm from '~/services/realm';

import {
  Container,
  HeaderTop,
  Logo,
  Text,
  Span,
  Content,
  Navigation,
  Title,
  List,
  ContainerList,
  Name,
  Button,
  TitleDetails,
  InputTextSearch,
} from './styles';

export default function Main() {
  const [sites, setSites] = useState([]);
  const [search, setSearch] = useState('');

  const navigation = useNavigation();

  function navigationToNewSite() {
    navigation.navigate('New');
  }

  function GoToDetails(data) {
    navigation.navigate('Details', {data});
  }

  async function loadSites() {
    const realm = await getRealm();
    let data;
    if (search === '') {
      data = await realm.objects('Site').sorted('name', false);
    } else {
      data = await realm
        .objects('Site')
        .sorted('name', false)
        .filtered(`name LIKE "*${search}*"`);
    }
    setSites(data);
  }

  useEffect(() => {
    loadSites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Container>
      <HeaderTop>
        <Logo source={logoImg} />
        <Text>
          Total de <Span>{sites.length} sites</Span>
        </Text>
      </HeaderTop>
      <Content>
        <Navigation onPress={navigationToNewSite}>
          <Title>Novo Cadastro</Title>
          <Feather name="plus-circle" size={22} color="#049ffb" />
        </Navigation>
        {sites.length > 1 || search !== '' ? (
          <InputTextSearch
            render
            onChangeText={setSearch}
            onChange={loadSites}
          />
        ) : null}
      </Content>
      <List
        data={sites}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <ContainerList>
            <Name key={item.id}>{item.name}</Name>
            <Button onPress={() => GoToDetails(item)}>
              <TitleDetails>Ver detalhes</TitleDetails>
              <Feather name="arrow-right" size={17} color="#049ffb" />
            </Button>
          </ContainerList>
        )}
      />
    </Container>
  );
}
