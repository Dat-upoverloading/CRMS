package mindustrytool.mindustry.schematic;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface SchematicInfoRepository extends MongoRepository<SchematicInfo, String> {

    @Query("{name:'?0'}")
    public SchematicInfoRepository findByName(String name);

}
