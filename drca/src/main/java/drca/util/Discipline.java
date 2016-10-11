package drca.util;

import org.springframework.data.annotation.Id;

/**
 * Created by rubenspessoa on 11/10/16.
 */
public class Discipline  {

    @Id private String id;

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
