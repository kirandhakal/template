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
        <div className="w-full bg-white" style={{ margin: 0, padding: 0 }}>
            {/* Toolbar */}


            {/* Form Content */}
            <div ref={formRef} className="bg-white" style={{
                maxWidth: '210mm',
                margin: '0 auto',
                padding: '12mm',
                fontFamily: 'Devanagari, serif',
                fontSize: '11pt',
                lineHeight: '1.3',
                color: '#000'
            }}>

                {/* Title */}
                <div className="text-center" style={{ marginBottom: '8pt' }}>
                    <h1 style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '12pt', margin: '0' }}>
                        {formState.title}
                    </h1>
                </div>

                <div style={{ marginBottom: '6pt', lineHeight: '1.2', fontSize: '10pt' }}>
                    <p style={{ fontWeight: 'bold', margin: '2pt 0' }}>श्री अप्यायमान कार्यालय, त्रि.कि.प्र.,</p>
                    <p style={{ fontWeight: 'bold', margin: '2pt 0' }}>गौचर, काठमाडौँ ।</p>
                </div>

                {/* Main Content */}
                <div style={{ marginBottom: '8pt', lineHeight: '1.4', fontSize: '10pt' }}>
                    <div>
                        <span>पस्तुत विषयमा म</span>
                        <span style={{
                            borderBottom: '1px solid #000',
                            display: 'inline-block',
                            width: '140px',
                            marginLeft: '4px',
                            marginRight: '4px',
                            verticalAlign: 'bottom',
                            fontSize: '10pt'
                        }}>
                            {formState.personName || ''}
                        </span>
                        <span>राहदानी नं</span>
                        <span style={{
                            borderBottom: '1px solid #000',
                            display: 'inline-block',
                            width: '140px',
                            marginLeft: '4px',
                            marginRight: '4px',
                            verticalAlign: 'bottom',
                            fontSize: '10pt'
                        }}>
                            {formState.passportNo || ''}
                        </span>
                        <span>बाहक</span>
                    </div>
                    <div style={{ marginTop: '4pt' }}>
                        <span>पर्यटक/भिजिट भिसामा</span>
                        <span style={{
                            borderBottom: '1px solid #000',
                            display: 'inline-block',
                            width: '180px',
                            marginLeft: '4px',
                            marginRight: '4px',
                            verticalAlign: 'bottom',
                            fontSize: '10pt'
                        }}>
                            {formState.passengerDetails.location || ''}
                        </span>
                        <span>देशमा जानका लागि कसैको</span>
                    </div>
                    <p style={{ margin: '4pt 0' }}>
                        करकाप/पुलसमेना नपरी नितान्त रूपमा भ्रमण गर्न प्रयोजनका लागि प्रश्यान गर्न लाकोको कूरा
                    </p>
                    <p style={{ margin: '4pt 0' }}>
                        स्व-घोषणा गदछु। साथे नेपाल सरकारले जारी गरेको यात्रा परामर्श (Travel Advisory) को
                    </p>
                    <p style={{ margin: '4pt 0' }}>
                        बारेमा राम्रोसँग जानकारी रहेको छ।
                    </p>
                </div>

                {/* Documents Table */}
                <div style={{ marginBottom: '8pt' }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        border: '1px solid #000',
                        fontSize: '10pt'
                    }}>
                        <thead>
                            <tr>
                                <th style={{
                                    border: '1px solid #000',
                                    padding: '4pt',
                                    textAlign: 'left',
                                    width: '70%',
                                    fontWeight: 'bold'
                                }}>
                                    संलग्न कागजातहरु
                                </th>
                                <th style={{
                                    border: '1px solid #000',
                                    padding: '4pt',
                                    textAlign: 'center',
                                    width: '30%',
                                    fontWeight: 'bold'
                                }}>
                                    केफियत
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {formState.documents.map((doc, index) => (
                                <tr key={doc.id} style={{ border: '1px solid #000' }}>
                                    <td style={{ border: '1px solid #000', padding: '4pt' }}>{doc.name}</td>
                                    <td style={{ border: '1px solid #000', padding: '4pt' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '9pt' }}>
                                                <span>छु</span>
                                                <Checkbox
                                                    checked={doc.submitted}
                                                    onCheckedChange={(checked) =>
                                                        handleDocumentChange(index, 'submitted', checked as boolean)
                                                    }
                                                />

                                            </label>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '9pt' }}>
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
                <div style={{ fontSize: '10pt', marginBottom: '8pt', lineHeight: '1.6' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4pt' }}>
                        <span style={{ whiteSpace: 'nowrap' }}>स्व-घोषणा गर्न व्यक्तिको नाम, थर:</span>
                        <span style={{
                            borderBottom: '1px solid #000',
                            flex: 1,
                            display: 'inline-block',
                            minHeight: '14px'
                        }}>
                            <input
                                type="text"
                                value={formState.personName}
                                onChange={(e) => handleInputChange('personName', e.target.value)}
                                className="bg-transparent border-none outline-none text-xs text-black"
                                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: '10pt' }}
                            />
                        </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4pt' }}>
                        <span style={{ whiteSpace: 'nowrap' }}>स्थायी ठेगना:</span>
                        <span style={{
                            borderBottom: '1px solid #000',
                            flex: 1,
                            display: 'inline-block',
                            minHeight: '14px'
                        }}>
                            <input
                                type="text"
                                value={formState.address}
                                onChange={(e) => handleInputChange('address', e.target.value)}
                                className="bg-transparent border-none outline-none text-xs text-black"
                                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: '10pt' }}
                            />
                        </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4pt' }}>
                        <span style={{ whiteSpace: 'nowrap' }}>नेपालमा समपर्क न.:</span>
                        <span style={{
                            borderBottom: '1px solid #000',
                            flex: 1,
                            display: 'inline-block',
                            minHeight: '14px'
                        }}>
                            <input
                                type="text"
                                value={formState.passportNo}
                                onChange={(e) => handleInputChange('passportNo', e.target.value)}
                                className="bg-transparent border-none outline-none text-xs text-black"
                                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: '10pt' }}
                            />
                        </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4pt' }}>
                        <span style={{ whiteSpace: 'nowrap' }}>नेपाल फर्कने मिति:</span>
                        <span style={{
                            borderBottom: '1px solid #000',
                            flex: 1,
                            display: 'inline-block',
                            minHeight: '14px'
                        }}>
                            <input
                                type="text"
                                value={formState.nepaliCitizenship}
                                onChange={(e) => handleInputChange('nepaliCitizenship', e.target.value)}
                                className="bg-transparent border-none outline-none text-xs text-black"
                                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: '10pt' }}
                            />
                        </span>
                    </div>
                </div>

                {/* Foreign Details */}
                <div style={{ fontSize: '10pt', marginBottom: '8pt', lineHeight: '1.6' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '4pt', margin: '0 0 4pt 0' }}>विदेशमा समपर्क गर्नका लागि:</p>

                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4pt' }}>
                        <span style={{ whiteSpace: 'nowrap' }}>व्यक्ति/संस्थाको नाम:</span>
                        <span style={{
                            borderBottom: '1px solid #000',
                            flex: 1,
                            display: 'inline-block',
                            minHeight: '14px'
                        }}>
                            <input
                                type="text"
                                value={formState.foreignerDetails.name}
                                onChange={(e) => handleInputChange('foreignerDetails.name', e.target.value)}
                                className="bg-transparent border-none outline-none text-xs text-black"
                                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: '10pt' }}
                            />
                        </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4pt' }}>
                        <span style={{ whiteSpace: 'nowrap' }}>ठेगना:</span>
                        <span style={{
                            borderBottom: '1px solid #000',
                            flex: 1,
                            display: 'inline-block',
                            minHeight: '14px'
                        }}>
                            <input
                                type="text"
                                value={formState.foreignerDetails.location}
                                onChange={(e) => handleInputChange('foreignerDetails.location', e.target.value)}
                                className="bg-transparent border-none outline-none text-xs text-black"
                                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: '10pt' }}
                            />
                        </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                        <span style={{ whiteSpace: 'nowrap' }}>समपर्क न.:</span>
                        <span style={{
                            borderBottom: '1px solid #000',
                            flex: 1,
                            display: 'inline-block',
                            minHeight: '14px'
                        }}>
                            <input
                                type="text"
                                value={formState.foreignerDetails.passportNo}
                                onChange={(e) => handleInputChange('foreignerDetails.passportNo', e.target.value)}
                                className="bg-transparent border-none outline-none text-xs text-black"
                                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: '10pt' }}
                            />
                        </span>
                    </div>
                </div>

                {/* Disclaimer */}
                <div style={{ fontSize: '10pt', marginBottom: '8pt', lineHeight: '1.4', fontWeight: 'bold' }}>
                    <p style={{ margin: '0' }}>
                        संलग्न विषयहरु र मेरो पेशा गरेका कागजातहरु ठिक छन्। म भ्रमण प्रयोजनको लागि जान
                        लागेको हो र यसबाट सिर्जित परिणाममा स्वयं जिम्मेवार रहनेछु ।
                    </p>
                </div>

                {/* Signature Section */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '8pt' }}>
                    {/* Thumb Table */}
                    <table style={{
                        borderCollapse: 'collapse',
                        border: '1px solid #000',
                        fontSize: '10pt',
                        minWidth: '140px'
                    }}>
                        <thead>
                            <tr>
                                <th style={{
                                    border: '1px solid #000',
                                    padding: '4pt',
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                }}>दायाँ</th>
                                <th style={{
                                    border: '1px solid #000',
                                    padding: '4pt',
                                    textAlign: 'center',
                                    fontWeight: 'bold'
                                }}>बायाँ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ height: '60px' }}>
                                <td style={{
                                    border: '1px solid #000',
                                    width: '70px',
                                    height: '60px'
                                }}></td>
                                <td style={{
                                    border: '1px solid #000',
                                    width: '70px',
                                    height: '60px'
                                }}></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Signature/Date */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '20px', paddingLeft: '16px', fontSize: '10pt' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ minWidth: '50px' }}>हस्ताक्षर</span>
                            <span style={{
                                borderBottom: '1px solid #000',
                                flex: 1,
                                display: 'inline-block',
                                minHeight: '14px',
                                marginLeft: '8px'
                            }}>
                                {formState.signature.name || ''}
                            </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ minWidth: '50px' }}>मिति:</span>
                            <span style={{
                                borderBottom: '1px solid #000',
                                flex: 1,
                                display: 'inline-block',
                                minHeight: '14px',
                                marginLeft: '8px'
                            }}>
                                {formState.signature.date || ''}
                            </span>
                        </div>
                    </div>
                </div>


            </div>

            <style>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body {
            margin: 0;
            padding: 0;
            background: white;
          }
          
          #root {
            background: white;
          }
          
          html, body, #root {
            width: 210mm;
            height: 297mm;
          }
          
          .no-print {
            display: none !important;
          }
          
          @page {
            size: A4;
            margin: 0;
          }
        }
        
        @media screen {
          div[ref] {
            box-shadow: 0 0 0 1px #ddd;
          }
        }
      `}</style>
        </div>
    );
};

export default ImmigrationForm;
