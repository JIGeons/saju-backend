/**
 * 천간, 지지의 음양 데이터 가져오기
 */
exports.getMinusPlus = () => {
  return {
    甲: "양",
    丙: "양",
    戊: "양",
    庚: "양",
    壬: "양",
    寅: "양",
    辰: "양",
    巳: "음",
    申: "양",
    戌: "양",
    亥: "음",
    乙: "음",
    丁: "음",
    己: "음",
    辛: "음",
    癸: "음",
    子: "양",
    丑: "음",
    卯: "음",
    午: "양",
    未: "음",
    酉: "음",
  };
};

/**
 * 시주 계산하기
 */
exports.getTimeJuData = () => {
  return {
    0: {
      0: "23:30",
      1: "01:29",
    }, //자시
    1: {
      0: "01:30",
      1: "03:29",
    }, //축시
    2: {
      0: "03:30",
      1: "05:29",
    }, //인시
    3: {
      0: "05:30",
      1: "07:29",
    }, //묘시
    4: {
      0: "07:30",
      1: "09:29",
    }, //진시
    5: {
      0: "09:30",
      1: "11:29",
    }, //사시
    6: {
      0: "11:30",
      1: "13:29",
    }, //오시
    7: {
      0: "13:30",
      1: "15:29",
    }, //미시
    8: {
      0: "15:30",
      1: "17:29",
    }, //신시
    9: {
      0: "17:30",
      1: "19:29",
    }, //유시
    10: {
      0: "19:30",
      1: "21:29",
    }, //술시
    11: {
      0: "21:30",
      1: "23:29",
    }, //해시
  };
};
exports.getTimeJuData2 = () => {
  return {
    甲: {
      0: {
        0: "甲",
        1: "子",
      },
      1: {
        0: "乙",
        1: "丑",
      },
      2: {
        0: "丙",
        1: "寅",
      },
      3: {
        0: "丁",
        1: "卯",
      },
      4: {
        0: "戊",
        1: "辰",
      },
      5: {
        0: "己",
        1: "巳",
      },
      6: {
        0: "庚",
        1: "午",
      },
      7: {
        0: "辛",
        1: "未",
      },
      8: {
        0: "壬",
        1: "申",
      },
      9: {
        0: "癸",
        1: "酉",
      },
      10: {
        0: "甲",
        1: "戌",
      },
      11: {
        0: "乙",
        1: "亥",
      },
    },

    己: {
      0: {
        0: "甲",
        1: "子",
      },
      1: {
        0: "乙",
        1: "丑",
      },
      2: {
        0: "丙",
        1: "寅",
      },
      3: {
        0: "丁",
        1: "卯",
      },
      4: {
        0: "戊",
        1: "辰",
      },
      5: {
        0: "己",
        1: "巳",
      },
      6: {
        0: "庚",
        1: "午",
      },
      7: {
        0: "辛",
        1: "未",
      },
      8: {
        0: "壬",
        1: "申",
      },
      9: {
        0: "癸",
        1: "酉",
      },
      10: {
        0: "甲",
        1: "戌",
      },
      11: {
        0: "乙",
        1: "亥",
      },
    },

    乙: {
      0: {
        0: "丙",
        1: "子",
      },
      1: {
        0: "丁",
        1: "丑",
      },
      2: {
        0: "戊",
        1: "寅",
      },
      3: {
        0: "己",
        1: "卯",
      },
      4: {
        0: "庚",
        1: "辰",
      },
      5: {
        0: "辛",
        1: "巳",
      },
      6: {
        0: "壬",
        1: "午",
      },
      7: {
        0: "癸",
        1: "未",
      },
      8: {
        0: "甲",
        1: "申",
      },
      9: {
        0: "乙",
        1: "酉",
      },
      10: {
        0: "丙",
        1: "戌",
      },
      11: {
        0: "丁",
        1: "亥",
      },
    },

    庚: {
      0: {
        0: "丙",
        1: "子",
      },
      1: {
        0: "丁",
        1: "丑",
      },
      2: {
        0: "戊",
        1: "寅",
      },
      3: {
        0: "己",
        1: "卯",
      },
      4: {
        0: "庚",
        1: "辰",
      },
      5: {
        0: "辛",
        1: "巳",
      },
      6: {
        0: "壬",
        1: "午",
      },
      7: {
        0: "癸",
        1: "未",
      },
      8: {
        0: "甲",
        1: "申",
      },
      9: {
        0: "乙",
        1: "酉",
      },
      10: {
        0: "丙",
        1: "戌",
      },
      11: {
        0: "丁",
        1: "亥",
      },
    },

    丙: {
      0: {
        0: "戊",
        1: "子",
      },
      1: {
        0: "己",
        1: "丑",
      },
      2: {
        0: "庚",
        1: "寅",
      },
      3: {
        0: "辛",
        1: "卯",
      },
      4: {
        0: "壬",
        1: "辰",
      },
      5: {
        0: "癸",
        1: "巳",
      },
      6: {
        0: "甲",
        1: "午",
      },
      7: {
        0: "乙",
        1: "未",
      },
      8: {
        0: "丙",
        1: "申",
      },
      9: {
        0: "丁",
        1: "酉",
      },
      10: {
        0: "戊",
        1: "戌",
      },
      11: {
        0: "己",
        1: "亥",
      },
    },

    辛: {
      0: {
        0: "戊",
        1: "子",
      },
      1: {
        0: "己",
        1: "丑",
      },
      2: {
        0: "庚",
        1: "寅",
      },
      3: {
        0: "辛",
        1: "卯",
      },
      4: {
        0: "壬",
        1: "辰",
      },
      5: {
        0: "癸",
        1: "巳",
      },
      6: {
        0: "甲",
        1: "午",
      },
      7: {
        0: "乙",
        1: "未",
      },
      8: {
        0: "丙",
        1: "申",
      },
      9: {
        0: "丁",
        1: "酉",
      },
      10: {
        0: "戊",
        1: "戌",
      },
      11: {
        0: "己",
        1: "亥",
      },
    },

    丁: {
      0: {
        0: "庚",
        1: "子",
      },
      1: {
        0: "辛",
        1: "丑",
      },
      2: {
        0: "壬",
        1: "寅",
      },
      3: {
        0: "癸",
        1: "卯",
      },
      4: {
        0: "甲",
        1: "辰",
      },
      5: {
        0: "乙",
        1: "巳",
      },
      6: {
        0: "丙",
        1: "午",
      },
      7: {
        0: "丁",
        1: "未",
      },
      8: {
        0: "戊",
        1: "申",
      },
      9: {
        0: "己",
        1: "酉",
      },
      10: {
        0: "庚",
        1: "戌",
      },
      11: {
        0: "辛",
        1: "亥",
      },
    },

    壬: {
      0: {
        0: "庚",
        1: "子",
      },
      1: {
        0: "辛",
        1: "丑",
      },
      2: {
        0: "壬",
        1: "寅",
      },
      3: {
        0: "癸",
        1: "卯",
      },
      4: {
        0: "甲",
        1: "辰",
      },
      5: {
        0: "乙",
        1: "巳",
      },
      6: {
        0: "丙",
        1: "午",
      },
      7: {
        0: "丁",
        1: "未",
      },
      8: {
        0: "戊",
        1: "申",
      },
      9: {
        0: "己",
        1: "酉",
      },
      10: {
        0: "庚",
        1: "戌",
      },
      11: {
        0: "辛",
        1: "亥",
      },
    },

    戊: {
      0: {
        0: "壬",
        1: "子",
      },
      1: {
        0: "癸",
        1: "丑",
      },
      2: {
        0: "甲",
        1: "寅",
      },
      3: {
        0: "乙",
        1: "卯",
      },
      4: {
        0: "丙",
        1: "辰",
      },
      5: {
        0: "丁",
        1: "巳",
      },
      6: {
        0: "戊",
        1: "午",
      },
      7: {
        0: "己",
        1: "未",
      },
      8: {
        0: "庚",
        1: "申",
      },
      9: {
        0: "辛",
        1: "酉",
      },
      10: {
        0: "壬",
        1: "戌",
      },
      11: {
        0: "癸",
        1: "亥",
      },
    },

    癸: {
      0: {
        0: "壬",
        1: "子",
      },
      1: {
        0: "癸",
        1: "丑",
      },
      2: {
        0: "甲",
        1: "寅",
      },
      3: {
        0: "乙",
        1: "卯",
      },
      4: {
        0: "丙",
        1: "辰",
      },
      5: {
        0: "丁",
        1: "巳",
      },
      6: {
        0: "戊",
        1: "午",
      },
      7: {
        0: "己",
        1: "未",
      },
      8: {
        0: "庚",
        1: "申",
      },
      9: {
        0: "辛",
        1: "酉",
      },
      10: {
        0: "壬",
        1: "戌",
      },
      11: {
        0: "癸",
        1: "亥",
      },
    },
  };
};

/**
 * 일간에 따른 십성 기준
 */
exports.getTenStar = () => {
  return {
    甲: {
      甲: {
        0: "비견",
        1: "목",
      },
      寅: {
        0: "비견",
        1: "목",
      },
      乙: {
        0: "겁재",
        1: "목",
      },
      卯: {
        0: "겁재",
        1: "목",
      },
      丙: {
        0: "식신",
        1: "화",
      },
      巳: {
        0: "식신",
        1: "화",
      },
      丁: {
        0: "상관",
        1: "화",
      },
      午: {
        0: "상관",
        1: "화",
      },
      戊: {
        0: "편재",
        1: "토",
      },
      辰: {
        0: "편재",
        1: "토",
      },
      戌: {
        0: "편재",
        1: "토",
      },
      己: {
        0: "정재",
        1: "토",
      },
      丑: {
        0: "정재",
        1: "토",
      },
      未: {
        0: "정재",
        1: "토",
      },
      庚: {
        0: "편관",
        1: "금",
      },
      申: {
        0: "편관",
        1: "금",
      },
      辛: {
        0: "정관",
        1: "금",
      },
      酉: {
        0: "정관",
        1: "금",
      },
      壬: {
        0: "편인",
        1: "수",
      },
      亥: {
        0: "편인",
        1: "수",
      },
      癸: {
        0: "정인",
        1: "수",
      },
      子: {
        0: "정인",
        1: "수",
      },
    },
    乙: {
      甲: {
        0: "겁재",
        1: "목",
      },
      寅: {
        0: "겁재",
        1: "목",
      },
      乙: {
        0: "비견",
        1: "목",
      },
      卯: {
        0: "비견",
        1: "목",
      },
      丙: {
        0: "상관",
        1: "화",
      },
      巳: {
        0: "상관",
        1: "화",
      },
      丁: {
        0: "식신",
        1: "화",
      },
      午: {
        0: "식신",
        1: "화",
      },
      戊: {
        0: "정재",
        1: "토",
      },
      辰: {
        0: "정재",
        1: "토",
      },
      戌: {
        0: "정재",
        1: "토",
      },
      己: {
        0: "편재",
        1: "토",
      },
      丑: {
        0: "편재",
        1: "토",
      },
      未: {
        0: "편재",
        1: "토",
      },
      庚: {
        0: "정관",
        1: "금",
      },
      申: {
        0: "정관",
        1: "금",
      },
      辛: {
        0: "편관",
        1: "금",
      },
      酉: {
        0: "편관",
        1: "금",
      },
      壬: {
        0: "정인",
        1: "수",
      },
      亥: {
        0: "정인",
        1: "수",
      },
      癸: {
        0: "편인",
        1: "수",
      },
      子: {
        0: "편인",
        1: "수",
      },
    },

    丙: {
      甲: {
        0: "편인",
        1: "목",
      },
      寅: {
        0: "편인",
        1: "목",
      },
      乙: {
        0: "정인",
        1: "목",
      },
      卯: {
        0: "정인",
        1: "목",
      },
      丙: {
        0: "비견",
        1: "화",
      },
      巳: {
        0: "비견",
        1: "화",
      },
      丁: {
        0: "겁재",
        1: "화",
      },
      午: {
        0: "겁재",
        1: "화",
      },
      戊: {
        0: "식신",
        1: "토",
      },
      辰: {
        0: "식신",
        1: "토",
      },
      戌: {
        0: "식신",
        1: "토",
      },
      己: {
        0: "상관",
        1: "토",
      },
      丑: {
        0: "상관",
        1: "토",
      },
      未: {
        0: "상관",
        1: "토",
      },
      庚: {
        0: "편재",
        1: "금",
      },
      申: {
        0: "편재",
        1: "금",
      },
      辛: {
        0: "정재",
        1: "금",
      },
      酉: {
        0: "정재",
        1: "금",
      },
      壬: {
        0: "편관",
        1: "수",
      },
      亥: {
        0: "편관",
        1: "수",
      },
      癸: {
        0: "정관",
        1: "수",
      },
      子: {
        0: "정관",
        1: "수",
      },
    },

    丁: {
      甲: {
        0: "정인",
        1: "목",
      },
      寅: {
        0: "정인",
        1: "목",
      },
      乙: {
        0: "편인",
        1: "목",
      },
      卯: {
        0: "편인",
        1: "목",
      },
      丙: {
        0: "겁재",
        1: "화",
      },
      巳: {
        0: "겁재",
        1: "화",
      },
      丁: {
        0: "비견",
        1: "화",
      },
      午: {
        0: "비견",
        1: "화",
      },
      戊: {
        0: "상관",
        1: "토",
      },
      辰: {
        0: "상관",
        1: "토",
      },
      戌: {
        0: "상관",
        1: "토",
      },
      己: {
        0: "식신",
        1: "토",
      },
      丑: {
        0: "식신",
        1: "토",
      },
      未: {
        0: "식신",
        1: "토",
      },
      庚: {
        0: "정재",
        1: "금",
      },
      申: {
        0: "정재",
        1: "금",
      },
      辛: {
        0: "편재",
        1: "금",
      },
      酉: {
        0: "편재",
        1: "금",
      },
      壬: {
        0: "정관",
        1: "수",
      },
      亥: {
        0: "정관",
        1: "수",
      },
      癸: {
        0: "편관",
        1: "수",
      },
      子: {
        0: "편관",
        1: "수",
      },
    },

    戊: {
      甲: {
        0: "편관",
        1: "목",
      },
      寅: {
        0: "편관",
        1: "목",
      },
      乙: {
        0: "정관",
        1: "목",
      },
      卯: {
        0: "정관",
        1: "목",
      },
      丙: {
        0: "편인",
        1: "화",
      },
      巳: {
        0: "편인",
        1: "화",
      },
      丁: {
        0: "정인",
        1: "화",
      },
      午: {
        0: "정인",
        1: "화",
      },
      戊: {
        0: "비견",
        1: "토",
      },
      辰: {
        0: "비견",
        1: "토",
      },
      戌: {
        0: "비견",
        1: "토",
      },
      己: {
        0: "겁재",
        1: "토",
      },
      丑: {
        0: "겁재",
        1: "토",
      },
      未: {
        0: "겁재",
        1: "토",
      },
      庚: {
        0: "식신",
        1: "금",
      },
      申: {
        0: "식신",
        1: "금",
      },
      辛: {
        0: "상관",
        1: "금",
      },
      酉: {
        0: "상관",
        1: "금",
      },
      壬: {
        0: "편재",
        1: "수",
      },
      亥: {
        0: "편재",
        1: "수",
      },
      癸: {
        0: "정재",
        1: "수",
      },
      子: {
        0: "정재",
        1: "수",
      },
    },

    己: {
      甲: {
        0: "정관",
        1: "목",
      },
      寅: {
        0: "정관",
        1: "목",
      },
      乙: {
        0: "편관",
        1: "목",
      },
      卯: {
        0: "편관",
        1: "목",
      },
      丙: {
        0: "정인",
        1: "화",
      },
      巳: {
        0: "정인",
        1: "화",
      },
      丁: {
        0: "편인",
        1: "화",
      },
      午: {
        0: "편인",
        1: "화",
      },
      戊: {
        0: "겁재",
        1: "토",
      },
      辰: {
        0: "겁재",
        1: "토",
      },
      戌: {
        0: "겁재",
        1: "토",
      },
      己: {
        0: "비견",
        1: "토",
      },
      丑: {
        0: "비견",
        1: "토",
      },
      未: {
        0: "비견",
        1: "토",
      },
      庚: {
        0: "상관",
        1: "금",
      },
      申: {
        0: "상관",
        1: "금",
      },
      辛: {
        0: "식신",
        1: "금",
      },
      酉: {
        0: "식신",
        1: "금",
      },
      壬: {
        0: "정재",
        1: "수",
      },
      亥: {
        0: "정재",
        1: "수",
      },
      癸: {
        0: "편재",
        1: "수",
      },
      子: {
        0: "편재",
        1: "수",
      },
    },

    庚: {
      甲: {
        0: "편재",
        1: "목",
      },
      寅: {
        0: "편재",
        1: "목",
      },
      乙: {
        0: "정재",
        1: "목",
      },
      卯: {
        0: "정재",
        1: "목",
      },
      丙: {
        0: "편관",
        1: "화",
      },
      巳: {
        0: "편관",
        1: "화",
      },
      丁: {
        0: "정관",
        1: "화",
      },
      午: {
        0: "정관",
        1: "화",
      },
      戊: {
        0: "편인",
        1: "토",
      },
      辰: {
        0: "편인",
        1: "토",
      },
      戌: {
        0: "편인",
        1: "토",
      },
      己: {
        0: "정인",
        1: "토",
      },
      丑: {
        0: "정인",
        1: "토",
      },
      未: {
        0: "정인",
        1: "토",
      },
      庚: {
        0: "비견",
        1: "금",
      },
      申: {
        0: "비견",
        1: "금",
      },
      辛: {
        0: "겁재",
        1: "금",
      },
      酉: {
        0: "겁재",
        1: "금",
      },
      壬: {
        0: "식신",
        1: "수",
      },
      亥: {
        0: "식신",
        1: "수",
      },
      癸: {
        0: "상관",
        1: "수",
      },
      子: {
        0: "상관",
        1: "수",
      },
    },

    辛: {
      甲: {
        0: "정재",
        1: "목",
      },
      寅: {
        0: "정재",
        1: "목",
      },
      乙: {
        0: "편재",
        1: "목",
      },
      卯: {
        0: "편재",
        1: "목",
      },
      丙: {
        0: "정관",
        1: "화",
      },
      巳: {
        0: "정관",
        1: "화",
      },
      丁: {
        0: "편관",
        1: "화",
      },
      午: {
        0: "편관",
        1: "화",
      },
      戊: {
        0: "정인",
        1: "토",
      },
      辰: {
        0: "정인",
        1: "토",
      },
      戌: {
        0: "정인",
        1: "토",
      },
      己: {
        0: "편인",
        1: "토",
      },
      丑: {
        0: "편인",
        1: "토",
      },
      未: {
        0: "편인",
        1: "토",
      },
      庚: {
        0: "겁재",
        1: "금",
      },
      申: {
        0: "겁재",
        1: "금",
      },
      辛: {
        0: "비견",
        1: "금",
      },
      酉: {
        0: "비견",
        1: "금",
      },
      壬: {
        0: "상관",
        1: "수",
      },
      亥: {
        0: "상관",
        1: "수",
      },
      癸: {
        0: "식신",
        1: "수",
      },
      子: {
        0: "식신",
        1: "수",
      },
    },

    壬: {
      甲: {
        0: "식신",
        1: "목",
      },
      寅: {
        0: "식신",
        1: "목",
      },
      乙: {
        0: "상관",
        1: "목",
      },
      卯: {
        0: "상관",
        1: "목",
      },
      丙: {
        0: "편재",
        1: "화",
      },
      巳: {
        0: "편재",
        1: "화",
      },
      丁: {
        0: "정재",
        1: "화",
      },
      午: {
        0: "정재",
        1: "화",
      },
      戊: {
        0: "편관",
        1: "토",
      },
      辰: {
        0: "편관",
        1: "토",
      },
      戌: {
        0: "편관",
        1: "토",
      },
      己: {
        0: "정관",
        1: "토",
      },
      丑: {
        0: "정관",
        1: "토",
      },
      未: {
        0: "정관",
        1: "토",
      },
      庚: {
        0: "편인",
        1: "금",
      },
      申: {
        0: "편인",
        1: "금",
      },
      辛: {
        0: "정인",
        1: "금",
      },
      酉: {
        0: "정인",
        1: "금",
      },
      壬: {
        0: "비견",
        1: "수",
      },
      亥: {
        0: "비견",
        1: "수",
      },
      癸: {
        0: "겁재",
        1: "수",
      },
      子: {
        0: "겁재",
        1: "수",
      },
    },

    癸: {
      甲: {
        0: "상관",
        1: "목",
      },
      寅: {
        0: "상관",
        1: "목",
      },
      乙: {
        0: "식신",
        1: "목",
      },
      卯: {
        0: "식신",
        1: "목",
      },
      丙: {
        0: "정재",
        1: "화",
      },
      巳: {
        0: "정재",
        1: "화",
      },
      丁: {
        0: "편재",
        1: "화",
      },
      午: {
        0: "편재",
        1: "화",
      },
      戊: {
        0: "정관",
        1: "토",
      },
      辰: {
        0: "정관",
        1: "토",
      },
      戌: {
        0: "정관",
        1: "토",
      },
      己: {
        0: "편관",
        1: "토",
      },
      丑: {
        0: "편관",
        1: "토",
      },
      未: {
        0: "편관",
        1: "토",
      },
      庚: {
        0: "정인",
        1: "금",
      },
      申: {
        0: "정인",
        1: "금",
      },
      辛: {
        0: "편인",
        1: "금",
      },
      酉: {
        0: "편인",
        1: "금",
      },
      壬: {
        0: "겁재",
        1: "수",
      },
      亥: {
        0: "겁재",
        1: "수",
      },
      癸: {
        0: "비견",
        1: "수",
      },
      子: {
        0: "비견",
        1: "수",
      },
    },
  };
};

/**
 * 한글 한자 변환
 */
exports.convertChineseToKorean = () => {
  return {
    甲: "갑",
    乙: "을",
    丙: "병",
    丁: "정",
    戊: "무",
    己: "기",
    庚: "경",
    辛: "신",
    壬: "임",
    癸: "계",
    子: "자",
    丑: "축",
    寅: "인",
    卯: "묘",
    辰: "진",
    巳: "사",
    午: "오",
    未: "미",
    申: "신",
    酉: "유",
    戌: "술",
    亥: "해",
  };
};

/**
 * 지장간 데이터 가져오기
 */
exports.getJijangan = () => {
  return {
    子: {
      first: {
        chinese: "壬",
        korean: "임",
        fiveCircle: "수",
        fiveCircleColor: "#039BE5",
        minusPlus: "양",
        rate: 10,
      },
      second: null,
      third: {
        chinese: "癸",
        korean: "계",
        fiveCircle: "수",
        fiveCircleColor: "#039BE5",
        minusPlus: "음",
        rate: 20,
      },
    },
    丑: {
      first: {
        chinese: "癸",
        korean: "계",
        fiveCircle: "수",
        fiveCircleColor: "#039BE5",
        minusPlus: "음",
        rate: 9,
      },
      second: {
        chinese: "辛",
        korean: "신",
        fiveCircle: "금",
        fiveCircleColor: "#E0E0E0",
        minusPlus: "음",
        rate: 3,
      },
      third: {
        chinese: "己",
        korean: "기",
        fiveCircle: "토",
        fiveCircleColor: "#FFD600",
        minusPlus: "음",
        rate: 18,
      },
    },
    寅: {
      first: {
        chinese: "戊",
        korean: "무",
        fiveCircle: "토",
        fiveCircleColor: "#FFD600",
        minusPlus: "양",
        rate: 7,
      },
      second: {
        chinese: "丙",
        korean: "병",
        fiveCircle: "화",
        fiveCircleColor: "#F44336",
        minusPlus: "양",
        rate: 7,
      },
      third: {
        chinese: "甲",
        korean: "갑",
        fiveCircle: "목",
        fiveCircleColor: "#4CAF50",
        minusPlus: "양",
        rate: 16,
      },
    },
    卯: {
      first: {
        chinese: "甲",
        korean: "갑",
        fiveCircle: "목",
        fiveCircleColor: "#4CAF50",
        minusPlus: "양",
        rate: 10,
      },
      second: null,
      third: {
        chinese: "乙",
        korean: "을",
        fiveCircle: "목",
        fiveCircleColor: "#4CAF50",
        minusPlus: "음",
        rate: 20,
      },
    },
    辰: {
      first: {
        chinese: "乙",
        korean: "을",
        fiveCircle: "목",
        fiveCircleColor: "#4CAF50",
        minusPlus: "음",
        rate: 9,
      },
      second: {
        chinese: "癸",
        korean: "계",
        fiveCircle: "수",
        fiveCircleColor: "#039BE5",
        minusPlus: "음",
        rate: 3,
      },
      third: {
        chinese: "戊",
        korean: "무",
        fiveCircle: "토",
        fiveCircleColor: "#FFD600",
        minusPlus: "양",
        rate: 18,
      },
    },
    巳: {
      first: {
        chinese: "戊",
        korean: "무",
        fiveCircle: "토",
        fiveCircleColor: "#FFD600",
        minusPlus: "양",
        rate: 7,
      },
      second: {
        chinese: "庚",
        korean: "경",
        fiveCircle: "금",
        fiveCircleColor: "#E0E0E0",
        minusPlus: "양",
        rate: 7,
      },
      third: {
        chinese: "丙",
        korean: "병",
        fiveCircle: "화",
        fiveCircleColor: "#F44336",
        minusPlus: "양",
        rate: 16,
      },
    },
    午: {
      first: {
        chinese: "丙",
        korean: "병",
        fiveCircle: "화",
        fiveCircleColor: "#F44336",
        minusPlus: "양",
        rate: 10,
      },
      second: {
        chinese: "己",
        korean: "기",
        fiveCircle: "토",
        fiveCircleColor: "#FFD600",
        minusPlus: "음",
        rate: 10,
      },
      third: {
        chinese: "丁",
        korean: "정",
        fiveCircle: "화",
        fiveCircleColor: "#F44336",
        minusPlus: "음",
        rate: 10,
      },
    },
    未: {
      first: {
        chinese: "丁",
        korean: "정",
        fiveCircle: "화",
        fiveCircleColor: "#F44336",
        minusPlus: "음",
        rate: 9,
      },
      second: {
        chinese: "乙",
        korean: "을",
        fiveCircle: "목",
        fiveCircleColor: "#4CAF50",
        minusPlus: "음",
        rate: 3,
      },
      third: {
        chinese: "己",
        korean: "기",
        fiveCircle: "토",
        fiveCircleColor: "#FFD600",
        minusPlus: "음",
        rate: 18,
      },
    },
    申: {
      first: {
        chinese: "戊",
        korean: "무",
        fiveCircle: "토",
        fiveCircleColor: "#FFD600",
        minusPlus: "양",
        rate: 7,
      },
      second: {
        chinese: "壬",
        korean: "임",
        fiveCircle: "수",
        fiveCircleColor: "#039BE5",
        minusPlus: "양",
        rate: 7,
      },
      third: {
        chinese: "庚",
        korean: "경",
        fiveCircle: "금",
        fiveCircleColor: "#E0E0E0",
        minusPlus: "양",
        rate: 16,
      },
    },
    酉: {
      first: {
        chinese: "庚",
        korean: "경",
        fiveCircle: "금",
        fiveCircleColor: "#E0E0E0",
        minusPlus: "양",
        rate: 10,
      },
      second: null,
      third: {
        chinese: "辛",
        korean: "신",
        fiveCircle: "금",
        fiveCircleColor: "#E0E0E0",
        minusPlus: "음",
        rate: 20,
      },
    },
    戌: {
      first: {
        chinese: "辛",
        korean: "신",
        fiveCircle: "금",
        fiveCircleColor: "#E0E0E0",
        minusPlus: "음",
        rate: 9,
      },
      second: {
        chinese: "丁",
        korean: "정",
        fiveCircle: "화",
        fiveCircleColor: "#F44336",
        minusPlus: "음",
        rate: 3,
      },
      third: {
        chinese: "戊",
        korean: "무",
        fiveCircle: "토",
        fiveCircleColor: "#FFD600",
        minusPlus: "양",
        rate: 18,
      },
    },
    亥: {
      first: {
        chinese: "戊",
        korean: "무",
        fiveCircle: "토",
        fiveCircleColor: "#FFD600",
        minusPlus: "양",
        rate: 7,
      },
      second: {
        chinese: "甲",
        korean: "갑",
        fiveCircle: "목",
        fiveCircleColor: "#4CAF50",
        minusPlus: "양",
        rate: 7,
      },
      third: {
        chinese: "壬",
        korean: "임",
        fiveCircle: "수",
        fiveCircleColor: "#039BE5",
        minusPlus: "양",
        rate: 16,
      },
    },
  };
};

/**
 * 대운 리스트 계산 용 60갑자
 */
module.exports.getSixtyGapjaForBigFortuneList = () => {
  return {
    1: {
      0: "甲",
      1: "子",
    },
    2: {
      0: "乙",
      1: "丑",
    },
    3: {
      0: "丙",
      1: "寅",
    },
    4: {
      0: "丁",
      1: "卯",
    },
    5: {
      0: "戊",
      1: "辰",
    },
    6: {
      0: "己",
      1: "巳",
    },
    7: {
      0: "庚",
      1: "午",
    },
    8: {
      0: "辛",
      1: "未",
    },
    9: {
      0: "壬",
      1: "申",
    },
    10: {
      0: "癸",
      1: "酉",
    },
    11: {
      0: "甲",
      1: "戌",
    },
    12: {
      0: "乙",
      1: "亥",
    },
    13: {
      0: "丙",
      1: "子",
    },
    14: {
      0: "丁",
      1: "丑",
    },
    15: {
      0: "戊",
      1: "寅",
    },
    16: {
      0: "己",
      1: "卯",
    },
    17: {
      0: "庚",
      1: "辰",
    },
    18: {
      0: "辛",
      1: "巳",
    },
    19: {
      0: "壬",
      1: "午",
    },
    20: {
      0: "癸",
      1: "未",
    },
    21: {
      0: "甲",
      1: "申",
    },
    22: {
      0: "乙",
      1: "酉",
    },
    23: {
      0: "丙",
      1: "戌",
    },
    24: {
      0: "丁",
      1: "亥",
    },
    25: {
      0: "戊",
      1: "子",
    },
    26: {
      0: "己",
      1: "丑",
    },
    27: {
      0: "庚",
      1: "寅",
    },
    28: {
      0: "辛",
      1: "卯",
    },
    29: {
      0: "壬",
      1: "辰",
    },
    30: {
      0: "癸",
      1: "巳",
    },
    31: {
      0: "甲",
      1: "午",
    },
    32: {
      0: "乙",
      1: "未",
    },
    33: {
      0: "丙",
      1: "申",
    },
    34: {
      0: "丁",
      1: "酉",
    },
    35: {
      0: "戊",
      1: "戌",
    },
    36: {
      0: "己",
      1: "亥",
    },
    37: {
      0: "庚",
      1: "子",
    },
    38: {
      0: "辛",
      1: "丑",
    },
    39: {
      0: "壬",
      1: "寅",
    },
    40: {
      0: "癸",
      1: "卯",
    },
    41: {
      0: "甲",
      1: "辰",
    },
    42: {
      0: "乙",
      1: "巳",
    },
    43: {
      0: "丙",
      1: "午",
    },
    44: {
      0: "丁",
      1: "未",
    },
    45: {
      0: "戊",
      1: "申",
    },
    46: {
      0: "己",
      1: "酉",
    },
    47: {
      0: "庚",
      1: "戌",
    },
    48: {
      0: "辛",
      1: "亥",
    },
    49: {
      0: "壬",
      1: "子",
    },
    50: {
      0: "癸",
      1: "丑",
    },
    51: {
      0: "甲",
      1: "寅",
    },
    52: {
      0: "乙",
      1: "卯",
    },
    53: {
      0: "丙",
      1: "辰",
    },
    54: {
      0: "丁",
      1: "巳",
    },
    55: {
      0: "戊",
      1: "午",
    },
    56: {
      0: "己",
      1: "未",
    },
    57: {
      0: "庚",
      1: "申",
    },
    58: {
      0: "辛",
      1: "酉",
    },
    59: {
      0: "壬",
      1: "戌",
    },
    60: {
      0: "癸",
      1: "亥",
    },
    61: {
      0: "甲",
      1: "子",
    },
    62: {
      0: "乙",
      1: "丑",
    },
    63: {
      0: "丙",
      1: "寅",
    },
    64: {
      0: "丁",
      1: "卯",
    },
    65: {
      0: "戊",
      1: "辰",
    },
    66: {
      0: "己",
      1: "巳",
    },
    67: {
      0: "庚",
      1: "午",
    },
    68: {
      0: "辛",
      1: "未",
    },
    69: {
      0: "壬",
      1: "申",
    },
    70: {
      0: "癸",
      1: "酉",
    },
    71: {
      0: "甲",
      1: "戌",
    },
    72: {
      0: "乙",
      1: "亥",
    },
    73: {
      0: "丙",
      1: "子",
    },
    74: {
      0: "丁",
      1: "丑",
    },
    75: {
      0: "戊",
      1: "寅",
    },
    76: {
      0: "己",
      1: "卯",
    },
    77: {
      0: "庚",
      1: "辰",
    },
    78: {
      0: "辛",
      1: "巳",
    },
    79: {
      0: "壬",
      1: "午",
    },
    80: {
      0: "癸",
      1: "未",
    },
    81: {
      0: "甲",
      1: "申",
    },
    82: {
      0: "乙",
      1: "酉",
    },
    83: {
      0: "丙",
      1: "戌",
    },
    84: {
      0: "丁",
      1: "亥",
    },
    85: {
      0: "戊",
      1: "子",
    },
    86: {
      0: "己",
      1: "丑",
    },
    87: {
      0: "庚",
      1: "寅",
    },
    88: {
      0: "辛",
      1: "卯",
    },
    89: {
      0: "壬",
      1: "辰",
    },
    90: {
      0: "癸",
      1: "巳",
    },
    91: {
      0: "甲",
      1: "午",
    },
    92: {
      0: "乙",
      1: "未",
    },
    93: {
      0: "丙",
      1: "申",
    },
    94: {
      0: "丁",
      1: "酉",
    },
    95: {
      0: "戊",
      1: "戌",
    },
    96: {
      0: "己",
      1: "亥",
    },
    97: {
      0: "庚",
      1: "子",
    },
    98: {
      0: "辛",
      1: "丑",
    },
    99: {
      0: "壬",
      1: "寅",
    },
    100: {
      0: "癸",
      1: "卯",
    },
    101: {
      0: "甲",
      1: "辰",
    },
    102: {
      0: "乙",
      1: "巳",
    },
    103: {
      0: "丙",
      1: "午",
    },
    104: {
      0: "丁",
      1: "未",
    },
    105: {
      0: "戊",
      1: "申",
    },
    106: {
      0: "己",
      1: "酉",
    },
    107: {
      0: "庚",
      1: "戌",
    },
    108: {
      0: "辛",
      1: "亥",
    },
    109: {
      0: "壬",
      1: "子",
    },
    110: {
      0: "癸",
      1: "丑",
    },
    111: {
      0: "甲",
      1: "寅",
    },
    112: {
      0: "乙",
      1: "卯",
    },
    113: {
      0: "丙",
      1: "辰",
    },
    114: {
      0: "丁",
      1: "巳",
    },
    115: {
      0: "戊",
      1: "午",
    },
    116: {
      0: "己",
      1: "未",
    },
    117: {
      0: "庚",
      1: "申",
    },
    118: {
      0: "辛",
      1: "酉",
    },
    119: {
      0: "壬",
      1: "戌",
    },
    120: {
      0: "癸",
      1: "亥",
    },
    121: {
      0: "甲",
      1: "子",
    },
    122: {
      0: "乙",
      1: "丑",
    },
    123: {
      0: "丙",
      1: "寅",
    },
    124: {
      0: "丁",
      1: "卯",
    },
    125: {
      0: "戊",
      1: "辰",
    },
    126: {
      0: "己",
      1: "巳",
    },
    127: {
      0: "庚",
      1: "午",
    },
    128: {
      0: "辛",
      1: "未",
    },
    129: {
      0: "壬",
      1: "申",
    },
    130: {
      0: "癸",
      1: "酉",
    },
    131: {
      0: "甲",
      1: "戌",
    },
    132: {
      0: "乙",
      1: "亥",
    },
    133: {
      0: "丙",
      1: "子",
    },
    134: {
      0: "丁",
      1: "丑",
    },
    135: {
      0: "戊",
      1: "寅",
    },
    136: {
      0: "己",
      1: "卯",
    },
    137: {
      0: "庚",
      1: "辰",
    },
    138: {
      0: "辛",
      1: "巳",
    },
    139: {
      0: "壬",
      1: "午",
    },
    140: {
      0: "癸",
      1: "未",
    },
    141: {
      0: "甲",
      1: "申",
    },
    142: {
      0: "乙",
      1: "酉",
    },
    143: {
      0: "丙",
      1: "戌",
    },
    144: {
      0: "丁",
      1: "亥",
    },
    145: {
      0: "戊",
      1: "子",
    },
    146: {
      0: "己",
      1: "丑",
    },
    147: {
      0: "庚",
      1: "寅",
    },
    148: {
      0: "辛",
      1: "卯",
    },
    149: {
      0: "壬",
      1: "辰",
    },
    150: {
      0: "癸",
      1: "巳",
    },
    151: {
      0: "甲",
      1: "午",
    },
    152: {
      0: "乙",
      1: "未",
    },
    153: {
      0: "丙",
      1: "申",
    },
    154: {
      0: "丁",
      1: "酉",
    },
    155: {
      0: "戊",
      1: "戌",
    },
    156: {
      0: "己",
      1: "亥",
    },
    157: {
      0: "庚",
      1: "子",
    },
    158: {
      0: "辛",
      1: "丑",
    },
    159: {
      0: "壬",
      1: "寅",
    },
    160: {
      0: "癸",
      1: "卯",
    },
    161: {
      0: "甲",
      1: "辰",
    },
    162: {
      0: "乙",
      1: "巳",
    },
    163: {
      0: "丙",
      1: "午",
    },
    164: {
      0: "丁",
      1: "未",
    },
    165: {
      0: "戊",
      1: "申",
    },
    166: {
      0: "己",
      1: "酉",
    },
    167: {
      0: "庚",
      1: "戌",
    },
    168: {
      0: "辛",
      1: "亥",
    },
    169: {
      0: "壬",
      1: "子",
    },
    170: {
      0: "癸",
      1: "丑",
    },
    171: {
      0: "甲",
      1: "寅",
    },
    172: {
      0: "乙",
      1: "卯",
    },
    173: {
      0: "丙",
      1: "辰",
    },
    174: {
      0: "丁",
      1: "巳",
    },
    175: {
      0: "戊",
      1: "午",
    },
    176: {
      0: "己",
      1: "未",
    },
    177: {
      0: "庚",
      1: "申",
    },
    178: {
      0: "辛",
      1: "酉",
    },
    179: {
      0: "壬",
      1: "戌",
    },
    180: {
      0: "癸",
      1: "亥",
    },
  };
};

/**
 * 60갑자
 */
module.exports.getSixtyGapja = () => {
  return {
    4: {
      0: "甲",
      1: "子",
    },
    5: {
      0: "乙",
      1: "丑",
    },
    6: {
      0: "丙",
      1: "寅",
    },
    7: {
      0: "丁",
      1: "卯",
    },
    8: {
      0: "戊",
      1: "辰",
    },
    9: {
      0: "己",
      1: "巳",
    },
    10: {
      0: "庚",
      1: "午",
    },
    11: {
      0: "辛",
      1: "未",
    },
    12: {
      0: "壬",
      1: "申",
    },
    13: {
      0: "癸",
      1: "酉",
    },
    14: {
      0: "甲",
      1: "戌",
    },
    15: {
      0: "乙",
      1: "亥",
    },
    16: {
      0: "丙",
      1: "子",
    },
    17: {
      0: "丁",
      1: "丑",
    },
    18: {
      0: "戊",
      1: "寅",
    },
    19: {
      0: "己",
      1: "卯",
    },
    20: {
      0: "庚",
      1: "辰",
    },
    21: {
      0: "辛",
      1: "巳",
    },
    22: {
      0: "壬",
      1: "午",
    },
    23: {
      0: "癸",
      1: "未",
    },
    24: {
      0: "甲",
      1: "申",
    },
    25: {
      0: "乙",
      1: "酉",
    },
    26: {
      0: "丙",
      1: "戌",
    },
    27: {
      0: "丁",
      1: "亥",
    },
    28: {
      0: "戊",
      1: "子",
    },
    29: {
      0: "己",
      1: "丑",
    },
    30: {
      0: "庚",
      1: "寅",
    },
    31: {
      0: "辛",
      1: "卯",
    },
    32: {
      0: "壬",
      1: "辰",
    },
    33: {
      0: "癸",
      1: "巳",
    },
    34: {
      0: "甲",
      1: "午",
    },
    35: {
      0: "乙",
      1: "未",
    },
    36: {
      0: "丙",
      1: "申",
    },
    37: {
      0: "丁",
      1: "酉",
    },
    38: {
      0: "戊",
      1: "戌",
    },
    39: {
      0: "己",
      1: "亥",
    },
    40: {
      0: "庚",
      1: "子",
    },
    41: {
      0: "辛",
      1: "丑",
    },
    42: {
      0: "壬",
      1: "寅",
    },
    43: {
      0: "癸",
      1: "卯",
    },
    44: {
      0: "甲",
      1: "辰",
    },
    45: {
      0: "乙",
      1: "巳",
    },
    46: {
      0: "丙",
      1: "午",
    },
    47: {
      0: "丁",
      1: "未",
    },
    48: {
      0: "戊",
      1: "申",
    },
    49: {
      0: "己",
      1: "酉",
    },
    50: {
      0: "庚",
      1: "戌",
    },
    51: {
      0: "辛",
      1: "亥",
    },
    52: {
      0: "壬",
      1: "子",
    },
    53: {
      0: "癸",
      1: "丑",
    },
    54: {
      0: "甲",
      1: "寅",
    },
    55: {
      0: "乙",
      1: "卯",
    },
    56: {
      0: "丙",
      1: "辰",
    },
    57: {
      0: "丁",
      1: "巳",
    },
    58: {
      0: "戊",
      1: "午",
    },
    59: {
      0: "己",
      1: "未",
    },
    0: {
      0: "庚",
      1: "申",
    },
    1: {
      0: "辛",
      1: "酉",
    },
    2: {
      0: "壬",
      1: "戌",
    },
    3: {
      0: "癸",
      1: "亥",
    },
  };
};