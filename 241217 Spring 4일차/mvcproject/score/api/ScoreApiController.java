package com.spring.mvcproject.score.api;

import com.spring.mvcproject.score.entity.Score;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;

@RestController // JSON응답
@RequestMapping("/api/v1/scores")
public class ScoreApiController {

    private Map<Long, Score> scoreStore = new HashMap<>();

    private Long nextId = 1L;

    public ScoreApiController() {
        Score s1 = new Score(nextId++, "김말복", 100, 88, 75);
        Score s2 = new Score(nextId++, "박수포자", 55, 95, 15);
        Score s3 = new Score(nextId++, "김마이클", 4, 100, 40);
        Score s4 = new Score(nextId++, "세종대왕", 100, 0, 90);

        scoreStore.put(s1.getId(), s1);
        scoreStore.put(s2.getId(), s2);
        scoreStore.put(s3.getId(), s3);
        scoreStore.put(s4.getId(), s4);
    }

    // 전체 성적정보 조회 (정렬 파라미터를 읽어야 함)
    // /api/v1/scores?sort=name
    @GetMapping
    public List<Score> scoreList() {
        return new ArrayList<>(scoreStore.values())
                .stream()
//                .sorted(Comparator.comparing())
                .collect(Collectors.toList())
                ;
    }

}