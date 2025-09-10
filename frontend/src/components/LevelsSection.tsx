import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Alert,
} from '@mui/material';
import { CheckCircle as CheckIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Level } from '../types';

const levels: Level[] = [
  {
    id: 'beginner',
    title: '🌱 初級',
    description: '基本的なパンマルと日常フレーズ',
    features: [
      '友達同士のあいさつ',
      '基本的な感情表現',
      'よく使う相槌',
    ],
    color: 'linear-gradient(135deg, #84fab0, #8fd3f4)',
  },
  {
    id: 'intermediate',
    title: '🚀 中級',
    description: '自然な会話とSNS表現',
    features: [
      '詳しい状況説明',
      '意見の表現',
      'SNS・チャット表現',
    ],
    color: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
  },
  {
    id: 'advanced',
    title: '⭐ 上級',
    description: 'ネイティブレベルの表現',
    features: [
      'スラングや流行語',
      '微妙なニュアンス',
      '関西弁レベルの親しさ',
    ],
    color: 'linear-gradient(135deg, #a8edea, #fed6e3)',
  },
];

const LevelsSection: React.FC = () => {
  const handleLevelSelect = (level: Level) => {
    // Future implementation: filter content by level
    console.log(`Level selected: ${level.id}`);
  };

  return (
    <Box
      id="levels"
      sx={{
        py: 6,
        mx: { xs: 1, md: 2 },
        my: 4,
      }}
    >
      <Container maxWidth="lg">
        <Card
          sx={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            p: { xs: 2, md: 4 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                textAlign: 'center',
                mb: 4,
                color: '#333',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              🎯 レベル別学習
            </Typography>
          </motion.div>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            {levels.map((level, index) => (
              <Grid item xs={12} md={4} key={level.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    onClick={() => handleLevelSelect(level)}
                    sx={{
                      background: level.color,
                      color: 'white',
                      cursor: 'pointer',
                      height: '100%',
                      minHeight: 300,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Typography
                        variant="h4"
                        component="h3"
                        sx={{
                          mb: 2,
                          fontSize: { xs: '1.3rem', md: '1.5rem' },
                          fontWeight: 'bold',
                        }}
                      >
                        {level.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          opacity: 0.9,
                          fontSize: '1rem',
                        }}
                      >
                        {level.description}
                      </Typography>

                      <List sx={{ flex: 1 }}>
                        {level.features.map((feature, featureIndex) => (
                          <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
                            <CheckIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
                            <ListItemText
                              primary={feature}
                              primaryTypographyProps={{
                                fontSize: '0.9rem',
                              }}
                              sx={{ opacity: 0.9 }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Alert
              severity="info"
              sx={{
                background: 'rgba(102, 126, 234, 0.1)',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                borderRadius: 2,
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                💡 学習のコツ
              </Typography>
              <Typography variant="body2">
                レベルに関係なく、実際に韓国人の友達と会話することが一番の近道です！
                フレーズを覚えたら、積極的に使ってみましょう。間違いを恐れずに、
                楽しみながら学習を続けることが大切です。
              </Typography>
            </Alert>
          </motion.div>
        </Card>
      </Container>
    </Box>
  );
};

export default LevelsSection;