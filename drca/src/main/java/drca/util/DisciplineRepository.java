package drca.util;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * Created by rubenspessoa on 11/10/16.
 */

@RepositoryRestResource(collectionResourceRel = "disciplines", path = "disciplines")
public interface DisciplineRepository extends MongoRepository<Discipline, String> {
    List<Discipline> findByName(@Param("name") String name);
}
