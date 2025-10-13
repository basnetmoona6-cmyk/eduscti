import React from 'react';

const ChairpersonSpeech = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section - 70vh with background image and purple overlay */}
      <div
        className="w-full text-indigo-800 text-center mt-20 sm:mt-28 shadow-2xl min-h-[300px] sm:min-h-[400px] flex items-center justify-center px-4 sm:px-6 relative"
        style={{
          backgroundImage: `url('https://i.ibb.co/ns8p21Zh/ee15ae19-6cb9-428b-8b3a-d0303cd82f45.jpg')`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* purple Overlay */}
        <div className="absolute inset-0 bg-purple-600 bg-opacity-30"></div>

        {/* Centered Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
              Chairperson's Message
            </h1>
            <p className="text-lg font-medium text-white drop-shadow">SCTI</p>
          </div>
        </div>
      </div>

      {/* Content Section - Below the hero */}
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row gap-8 items-center">
        {/* Right Side - Chairman Image (Moves to top on mobile) */}
        <div className="order-1 md:order-2 flex flex-col items-center">
          <img
            src="https://i.ibb.co/p6wRfcHJ/914290cc-2b69-4c3c-99bf-6e05dda8c0dc.jpg"
            alt="Chairperson Khadga Bahadur Khatri"
            width="280"
            height="400"
            className="max-w-full h-auto"
          />
          <div className="text-center mt-2">
            <p className="font-bold text-lg">Khadga Bahadur Khatri</p>
            <p>Chairperson</p>
          </div>
        </div>

        {/* Left Side - Text Content (Original, moves below image on mobile) */}
        <div className="flex-1 order-2 md:order-1 flex flex-col items-center">
          <div className="prose max-w-none text-center">
            <p className="mb-4">
              हाम्रो कलेज शिक्षाको गुणस्तर, अनुशासन, नैतिक मूल्य र समग्र व्यक्तित्व विकासमा केन्द्रित रही निरन्तर प्रगति गर्दै आएको एक
              विशिष्ट शैक्षिक संस्था हो। स्थापना कालदेखि नै हामीले आधुनिक शिक्षण पद्धति, अनुभवी शिक्षकहरू, प्रविधियुक्त पूर्वाधार र
              विद्यार्थीमुखी वातावरणको संयोजनमार्फत उत्कृष्टता कायम राख्न सफल भएका छौँ।
            </p>
            <p className="mb-4">
              हामीले विद्यार्थीहरूलाई केवल किताबी ज्ञानमा सीमित नराखी, अनुसन्धान, नवप्रवर्तन, नेतृत्व र सामाजिक उत्तरदायित्वका क्षेत्रमा
              समेत सक्षम बनाउने लक्ष्य राखेका छौं। हाम्रो कलेजले हालसम्म थुप्रै शैक्षिक उपलब्धिहरू हासिल गरेको छ— चाहे त्यो
              बोर्ड/विश्वविद्यालय स्तरको परीक्षामा उत्कृष्ट नतिजा होस्, वा विभिन्न राष्ट्रिय तथा अन्तर्राष्ट्रिय प्रतियोगितामा
              विद्यार्थीहरूको उल्लेखनीय सहभागिता र सफलता।
            </p>
            <p className="mb-4">
              हामीलाई गर्व छ कि हाम्रा विद्यार्थीहरू विभिन्न प्रतिष्ठित संस्थान, रोजगारीका क्षेत्र, समाजसेवा र उद्यमशिलता मार्फत
              समाजमा सकारात्मक प्रभाव पारिरहेका छन्। यसका साथै, हाम्रा पूर्वविद्यार्थीहरूको सफलता नै हाम्रो प्रेरणाको स्रोत बनेको छ।
            </p>
            <p className="mb-4">
              अन्त्यमा, म यो प्रोस्पेक्टस हेरेर तपाईंले हाम्रो कलेजको लक्ष्य, दर्शन, उपलब्धि र कार्यदिशाबारे विस्तृत जानकारी पाउनुहुने आशा
              गर्दछु। हामी तपाईंको उज्ज्वल भविष्यको सहयात्री बन्न आतुर छौं।
            </p>
            <div className="mt-6 flex flex-col items-center">
              <p className="font-semibold">शुभकामना सहित,</p>
              <p className="font-bold text-lg">खड्ग बहादुर खत्री</p>
              <p>अध्यक्ष, सिद्धबाबा +२ म्यानेजमेन्ट</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairpersonSpeech;