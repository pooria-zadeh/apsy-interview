import React from 'react';
import {UserDetail} from '../../models/users';

import {Container} from '../shared/styledContainer';
import {Text} from '../shared/styledText';

import string from '../../../assets/locale/en';

const DetailText = ({text, ...props}: {text: string; props?: any}) => (
  <Text light fontSize={3} {...props}>
    {text}
  </Text>
);

const LabeledText = ({
  label,
  text,
  ...props
}: {
  text: string;
  label: string;
  props?: any;
}) => (
  <Text {...props}>
    <Text light fontSize={3}>
      {`${label}: `}
    </Text>
    <Text light fontSize={3}>
      {text}
    </Text>
  </Text>
);

const DetailUser = ({
  name,
  company,
  email,
  address,
  username,
  website,
}: UserDetail) => {
  return (
    <Container fill p={3}>
      <Text bold textAlign="center" fontSize={4}>
        {name}
      </Text>
      <Text textAlign="center" color="gray.1" fontSize={3}>
        {company.name}
      </Text>
      <Container pt={5} px={2}>
        <Text bold textAlign="center" fontSize={4}>
          {string.contactInfo}
        </Text>
        <DetailText text={email} my={3} />
        <DetailText text={address.street} />
        <DetailText text={address.suite} />
        <DetailText text={address.city} />
        <DetailText text={address.zipcode} />
      </Container>
      <Container py={3} pt={5} px={2}>
        <Text bold textAlign="center" fontSize={4}>
          {string.otherInfo}
        </Text>
        <LabeledText label={string.username} text={username} mt={3} />
        <LabeledText label={string.website} text={website} />
      </Container>
    </Container>
  );
};

export default DetailUser;
