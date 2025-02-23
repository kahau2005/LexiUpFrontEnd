import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const data = [
    {
      word: "Apple",
      pronunciation: "/ˈæp.l/",
      level: "Easy",
      vietnamese: "Táo"
    },
    {
      word: "Run",
      pronunciation: "/rʌn/",
      level: "Easy",
      vietnamese: "Chạy"
    },
    {
      word: "Concept",
      pronunciation: "/ˈkɒn.sept/",
      level: "Medium",
      vietnamese: "Khái niệm"
    },
    {
      word: "Evaluate",
      pronunciation: "/ɪˈvæl.ju.eɪt/",
      level: "Medium",
      vietnamese: "Đánh giá"
    },
    {
      word: "Obscure",
      pronunciation: "/əbˈskjʊr/",
      level: "Hard",
      vietnamese: "Tối nghĩa"
    },
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    ,
    {
      word: "Impeccable",
      pronunciation: "/ɪmˈpek.ə.bəl/",
      level: "Hard",
      vietnamese: "Hoàn hảo"
    }
    
  ];
  
  export default function TableData() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Word</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Level</TableHead>
            <TableHead className="text-right">Vietnamese</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((word, index) => (
            <TableRow key={index}>
                <TableCell className="font-medium">{word.word}</TableCell>
              <TableCell>{word.pronunciation}</TableCell>
              <TableCell>{word.level}</TableCell>
              <TableCell className="text-right">{word.vietnamese}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    )
  }
  