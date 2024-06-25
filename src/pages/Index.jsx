import { Box, Container, VStack, Heading, Input, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [photos, setPhotos] = useState([]);
  const [photoFile, setPhotoFile] = useState(null);

  const handleUpload = () => {
    if (photoFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotos([...photos, reader.result]);
      };
      reader.readAsDataURL(photoFile);
      setPhotoFile(null);
    }
  };

  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" textAlign="center" mt={8}>
          Photo Sharing Platform
        </Heading>
        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="md" mb={4}>
            Upload a Photo
          </Heading>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setPhotoFile(e.target.files[0])}
            mb={4}
          />
          <Button colorScheme="blue" onClick={handleUpload}>
            Upload
          </Button>
        </Box>
        <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="md" mb={4}>
            Photo Feed
          </Heading>
          {photos.length === 0 ? (
            <Text>No photos uploaded yet.</Text>
          ) : (
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
              {photos.map((url, index) => (
                <Image key={index} src={url} alt={`Photo ${index + 1}`} borderRadius="md" />
              ))}
            </SimpleGrid>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;