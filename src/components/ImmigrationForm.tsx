import React, { useRef, useState } from 'react';
import { Checkbox } from './ui/checkbox';
interface Document {
    id: string;
    name: string;
    submitted: boolean;
    received: boolean;
}

interface FormData {
    title: string;
    organization: string;
    travelAdvisoryNote: string;
    passengerDetails: {
        name: string;
        date: string;
        category: string;
        location: string;
        travelPurpose: string;
    };
    documents: Document[];
    personName: string;
    address: string;
    passportNo: string;
    nepaliCitizenship: string;
    foreignerDetails: {
        name: string;
        location: string;
        passportNo: string;
    };
    photos: {
        right: string;
        left: string;
    };
    signature: {
        name: string;
        date: string;
    };
}

interface ImmigrationFormProps {
    data: FormData;
}

const ImmigrationForm: React.FC<ImmigrationFormProps> = ({ data }) => {
    const formRef = useRef<HTMLDivElement>(null);
    const [formState, setFormState] = useState<FormData>(data);

    const handleDocumentChange = (index: number, field: 'submitted' | 'received', value: boolean) => {
        const updatedDocuments = [...formState.documents];
        updatedDocuments[index][field] = value;
        setFormState({ ...formState, documents: updatedDocuments });
    };

    const handleInputChange = (path: string, value: string) => {
        const keys = path.split('.');
        const newState = JSON.parse(JSON.stringify(formState));
        let current = newState;
        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
        setFormState(newState);
    };
    return (
        <div className="w-full min-h-screen bg-white">
            {/* Toolbar */}


            {/* Form Content */}
            <div ref={formRef} className="max-w-3xl mx-auto p-8 bg-white">

                {/* Title */}
                <div className="text-center mb-4">
                    <h1 className="text-xl font-bold underline" style={{ fontFamily: 'Devanagari, serif' }}>
                        {formState.title}
                    </h1>
                </div>

                <div className="mb-3 text-xs leading-tight text-left">
                    <p style={{ fontFamily: 'Devanagari, serif', fontWeight: 'bold' }}>श्री अप्यायमान कार्यालय, दिउ.कि.प्र.,</p>
                    <p style={{ fontFamily: 'Devanagari, serif', fontWeight: 'black' }}>गौचर, काठमाडौँ ।</p>
                </div>

                {/* Main Content */}
                <div className="text-xs leading-relaxed mb-4" style={{ fontFamily: 'Devanagari, serif' }}>
                    <p>
                        पस्तुत विषयमा म..........................................राहदानी नं................................... बाटक
                    </p>
                    <p>
                        पर्यटक/मिश्रित विषमा ........................................ देशमा जानका लागि कसेकी
                    </p>
                    <p>
                        करकाप/पुलसमेना नपरी मितान्त रूपमा भ्रमण गर्न प्रयोजनका लागि प्रश्यान गर्न लाकोको कूरा
                    </p>
                    <p>
                        स्व-घोषणा गदछु। साथे नेपाल सरकारले जारी गरेको यात्रा परामर्श (Travel Advisory) को
                    </p>
                    <p>
                        बारेमा राधोंको जानकारी राखेको छ।
                    </p>
                </div>

                {/* Documents Table */}
                <div className="mb-6">
                    <table className="w-full border-2 border-black text-xs border-collapse">
                        <thead>
                            <tr>
                                <th className="border-2 border-black p-2 text-left" style={{ width: '70%' }}>
                                    सल्लह कागजातहरु
                                </th>
                                <th className="border-2 border-black p-2 text-center" style={{ width: '30%' }}>
                                    केफियत
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {formState.documents.map((doc, index) => (
                                <tr key={doc.id} className="border-2 border-black">
                                    <td className="border-2 border-black p-2">{doc.name}</td>
                                    <td className="border-2 border-black p-2">
                                        <div className="flex justify-around items-center">
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <span>छु</span>
                                                <Checkbox
                                                    checked={doc.submitted}
                                                    onCheckedChange={(checked) =>
                                                        handleDocumentChange(index, 'submitted', checked as boolean)
                                                    }
                                                />

                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <span>छैन</span>
                                                <Checkbox
                                                    checked={doc.received}
                                                    onCheckedChange={(checked) =>
                                                        handleDocumentChange(index, 'received', checked as boolean)
                                                    }
                                                />

                                            </label>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Form Fields */}
                <div className="text-xs space-y-2 mb-4 " style={{ fontFamily: 'Devanagari, serif' }}>
                    <div className="flex items-baseline gap-2">
                        <span>स्व-घोषणा गर्न व्यक्तिको नाम, यट:</span>
                        <span className="flex-1">
                            ..........................................
                            <input
                                type="text"
                                value={formState.personName}
                                onChange={(e) => handleInputChange('personName', e.target.value)}
                                className="bg-transparent border-none outline-none px-1 w-32 text-xs text-black inline-block"
                                style={{ width: '120px', display: 'inline', background: 'transparent', border: 'none', outline: 'none' }}
                            />

                        </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span>स्थायी ठेगना:</span>
                        <span className="flex-1">
                            ..........................................
                            <input
                                type="text"
                                value={formState.address}
                                onChange={(e) => handleInputChange('address', e.target.value)}
                                className="bg-transparent border-none outline-none px-1 w-32 text-xs text-black inline-block"
                                style={{ width: '120px', display: 'inline', background: 'transparent', border: 'none', outline: 'none' }}
                            />

                        </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span>नेपालमा समपर्क न.:</span>
                        <span className="flex-1">
                            ..........................................
                            <input
                                type="text"
                                value={formState.passportNo}
                                onChange={(e) => handleInputChange('passportNo', e.target.value)}
                                className="bg-transparent border-none outline-none px-1 w-32 text-xs text-black inline-block"
                                style={{ width: '120px', display: 'inline', background: 'transparent', border: 'none', outline: 'none' }}
                            />

                        </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span>नेपाल फर्कने मिति:</span>
                        <span className="flex-1">
                            ..........................................
                            <input
                                type="text"
                                value={formState.nepaliCitizenship}
                                onChange={(e) => handleInputChange('nepaliCitizenship', e.target.value)}
                                className="bg-transparent border-none outline-none px-1 w-32 text-xs text-black inline-block"
                                style={{ width: '120px', display: 'inline', background: 'transparent', border: 'none', outline: 'none' }}
                            />

                        </span>
                    </div>
                </div>

                {/* Foreign Details */}
                <div className="text-xs space-y-2 mb-6" style={{ fontFamily: 'Devanagari, serif' }}>
                    <p className="fontweight-bold">विदेशमा समपर्क गर्नका लागि:</p>

                    <div className="flex items-baseline gap-2">
                        <span>व्यक्ति/संस्थाको नाम:</span>
                        <span className="flex-1">
                            ..........................................
                            <input
                                type="text"
                                value={formState.foreignerDetails.name}
                                onChange={(e) => handleInputChange('foreignerDetails.name', e.target.value)}
                                className="bg-transparent border-none outline-none px-1 w-32 text-xs text-black inline-block"
                                style={{ width: '120px', display: 'inline', background: 'transparent', border: 'none', outline: 'none' }}
                            />

                        </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                        <span>ठेगना:</span>
                        <span className="flex-1">
                            ..........................................
                            <input
                                type="text"
                                value={formState.foreignerDetails.location}
                                onChange={(e) => handleInputChange('foreignerDetails.location', e.target.value)}
                                className="bg-transparent border-none outline-none px-1 w-32 text-xs text-black inline-block"
                                style={{ width: '120px', display: 'inline', background: 'transparent', border: 'none', outline: 'none' }}
                            />

                        </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                        <span>समपर्क न.:</span>
                        <span className="flex-1">
                            ..........................................
                            <input
                                type="text"
                                value={formState.foreignerDetails.passportNo}
                                onChange={(e) => handleInputChange('foreignerDetails.passportNo', e.target.value)}
                                className="bg-transparent border-none outline-none px-1 w-32 text-xs text-black inline-block"
                                style={{ width: '120px', display: 'inline', background: 'transparent', border: 'none', outline: 'none' }}
                            />

                        </span>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="text-xs leading-relaxed mb-6" style={{ fontFamily: 'Devanagari, serif', fontWeight: 'bold' }}>
                    <p>
                        संलग्न विषयहरु र मेरो पेशा गरेकी कागजातहरु हिक छन्। म भ्रमण प्रयोजनको लागि जान
                        साधेकी हो र यसपछ्ट मिम्जित नुफिमान स्वयं निमेदार रहिछु।
                    </p>
                </div>

                {/* Signature Section */}
                <div className="flex mb-6 gap-2 items-start">
                    {/* Thumb Table */}
                    <table className="border-2 border-black text-xs border-collapse bg-white px-4" style={{ minWidth: 160 }}>
                        <thead>
                            <tr>
                                <th className="border-2 border-black p-2 text-center">दायाँ</th>
                                <th className="border-2 border-black p-2 text-center">बायाँ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ height: 60 }}>
                                <td className="border-2 border-black" style={{ width: '80px', height: '60px' }}></td>
                                <td className="border-2 border-black" style={{ width: '80px', height: '60px' }}></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Signature/Date */}
                    <div className="flex-1 flex flex-col justify-start gap-4 pl-8">
                        <div className="flex items-center text-xs">
                            <span className="inline-block" style={{ minWidth: 60 }}>हस्ताक्षर</span>
                            <span className="inline-block ml-2 border-b border-black flex-1" style={{ minWidth: 120 }}></span>
                        </div>
                        <div className="flex items-center text-xs">
                            <span className="inline-block" style={{ minWidth: 60 }}>मिति:</span>
                            <span className="inline-block ml-2 border-b border-black flex-1" style={{ minWidth: 120 }}></span>
                        </div>
                    </div>
                </div>


            </div>

            <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            margin: 0;
            padding: 0;
          }
          #root {
            background: white;
          }
        }
      `}</style>
        </div>
    );
};

export default ImmigrationForm;
