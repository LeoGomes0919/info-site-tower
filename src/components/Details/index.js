import React, {useState} from 'react';
import {Alert, Linking} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Father from 'react-native-vector-icons/Feather';
import getRealm from '~/services/realm';

import {
  MainDetails,
  LabelName,
  ContentSiteName,
  DataText,
  Share,
  ShareAction,
  Actions,
  ButtonEdit,
  ButtonDelete,
  TitleButtons,
  TextShare,
  Text,
  Navigation,
} from './styles';
import {Container, HeaderTop, Logo, Title} from '~/pages/Main/styles';
import logoImg from '~/assets/logo.png';

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const [sites, setSites] = useState([]);

  const site = route.params.data;
  const message = `*SITE:* ${site.name}, *BANCOS:* ${site.numBank}, *TIPO DE UR:* ${site.typeUr}, *QUANTIDADE DE UR:* ${site.numUr}, *CONSUMO:* ${site.consumption}, *AUTONOMIA:* ${site.autonomyHr}`;

  function returnListSite() {
    navigation.navigate('List', {sites});
  }

  function updateSiteById(siteById) {
    navigation.navigate('Edit', {siteById});
  }

  async function loadSites() {
    const realm = await getRealm();

    const data = await realm.objects('Site').sorted('name', false);
    setSites(data);
  }

  async function deleteSiteById() {
    const realm = await getRealm();
    let siteId = realm.objects('Site');
    let id = siteId.filtered(`id = ${site.id}`);
    realm.write(() => {
      realm.delete(id);
      returnListSite();
    });
  }

  async function handleDeleteSiteById() {
    try {
      Alert.alert('Aviso', `O site ${site.name} será excluido, tem certeza?`, [
        {
          text: 'Não',
          cancelable: true,
        },
        {
          text: 'Sim',
          onPress: await deleteSiteById,
        },
      ]);
      loadSites;
    } catch (err) {
      console.log('Erro the delete');
    }
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone&text=${message}`);
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

      <MainDetails>
        <ContentSiteName>
          <LabelName>SITE:</LabelName>
          <DataText>{site.name}</DataText>
        </ContentSiteName>
        <ContentSiteName>
          <LabelName>BANCOS:</LabelName>
          <DataText>{site.numBank}</DataText>
        </ContentSiteName>
        <ContentSiteName>
          <LabelName>FABRICAÇÃO:</LabelName>
          <DataText>{site.dateBank}</DataText>
        </ContentSiteName>
        <ContentSiteName>
          <LabelName>NÚMERO DE URs:</LabelName>
          <DataText>{site.numUr}</DataText>
        </ContentSiteName>
        <ContentSiteName>
          <LabelName>TIPO DE UR:</LabelName>
          <DataText>{site.typeUr}</DataText>
        </ContentSiteName>
        <ContentSiteName>
          <LabelName>CONSUMO EM A:</LabelName>
          <DataText>{site.consumption}</DataText>
        </ContentSiteName>
        <ContentSiteName>
          <LabelName>AUTONOMIA HR:</LabelName>
          <DataText>{site.autonomyHr}</DataText>
        </ContentSiteName>
        <Share>
          <ShareAction onPress={sendWhatsapp}>
            <TextShare>Enviar via WhatsApp</TextShare>
            <Father name="message-circle" size={20} color="#25d366" />
          </ShareAction>
        </Share>
      </MainDetails>

      <Actions>
        <ButtonEdit onPress={() => updateSiteById(site)}>
          <TitleButtons>Editar</TitleButtons>
          <Father name="edit" size={18} color="#fff" />
        </ButtonEdit>
        <ButtonDelete onPress={handleDeleteSiteById}>
          <TitleButtons>Excluir</TitleButtons>
          <Father name="trash-2" size={18} color="#fff" />
        </ButtonDelete>
      </Actions>
    </Container>
  );
}
