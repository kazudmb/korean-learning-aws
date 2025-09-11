import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { useAppStore } from '../store/useAppStore';
import CategoryCard from './CategoryCard';
import PhraseItem from './PhraseItem';

const PhrasesSection: React.FC = () => {
  const { categories, selectedCategory, selectCategory, clearCategory } = useAppStore();

  return (
    <div id="phrases" className="py-12 mx-2 md:mx-4 my-8">
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
                📱 シーン別フレーズ
              </CardTitle>
            </CardHeader>
          </motion.div>

          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CategoryCard
                    category={category}
                    onClick={selectCategory}
                  />
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {selectedCategory && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-gray-50 border border-gray-200 mt-6 p-6">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b-2 border-[#667eea]">
                      <h3 className="text-xl font-bold text-[#667eea]">
                        {selectedCategory.title}
                      </h3>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={clearCategory}
                        className="bg-red-500 hover:bg-red-600 rounded-full"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedCategory.phrases.map((phrase, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <PhraseItem phrase={phrase} />
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default PhrasesSection;