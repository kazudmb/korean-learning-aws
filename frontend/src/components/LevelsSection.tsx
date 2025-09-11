import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
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
    <div id="levels" className="py-12 mx-2 md:mx-4 my-8">
      <Container maxWidth="lg">
        <Card className="glass-effect rounded-3xl shadow-2xl p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl text-gray-800 mb-4">
                🎯 レベル別学習
              </CardTitle>
            </CardHeader>
          </motion.div>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {levels.map((level, index) => (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    onClick={() => handleLevelSelect(level)}
                    className="text-white cursor-pointer h-full min-h-[300px] transition-all duration-300 hover:shadow-2xl"
                    style={{ background: level.color }}
                  >
                    <CardContent className="p-6 h-full flex flex-col">
                      <h3 className="text-xl md:text-2xl font-bold mb-4">
                        {level.title}
                      </h3>

                      <p className="mb-6 opacity-90 text-base">
                        {level.description}
                      </p>

                      <div className="flex-1">
                        {level.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center py-1">
                            <CheckCircle className="mr-2 h-5 w-5" />
                            <span className="text-sm opacity-90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-bold mb-2 text-gray-800">💡 学習のコツ</h4>
                <p className="text-sm text-gray-700">
                  レベルに関係なく、実際に韓国人の友達と会話することが一番の近道です！
                  フレーズを覚えたら、積極的に使ってみましょう。間違いを恐れずに、
                  楽しみながら学習を続けることが大切です。
                </p>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default LevelsSection;